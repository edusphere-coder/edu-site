import axios from 'axios';

// Create axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log('Axios baseURL:', api.defaults.baseURL);

// Request interceptor to add token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

// Auth API
export const authAPI = {
    register: async (userData: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        phone?: string;
        address?: string;
        role?: 'student' | 'instructor';
    }) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

    login: async (credentials: { email: string; password: string }) => {
        const response = await api.post('/auth/login', credentials);
        if (response.data.success) {
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data.user));
            // Store token expiration time (1 hour from now)
            const expirationTime = new Date().getTime() + (60 * 60 * 1000); // 1 hour in milliseconds
            localStorage.setItem('tokenExpiration', expirationTime.toString());
        }
        return response.data;
    },

    getProfile: async () => {
        const response = await api.get('/auth/profile');
        return response.data;
    },

    updateProfile: async (userData: {
        first_name?: string;
        last_name?: string;
        phone?: string;
        address?: string;
    }) => {
        const response = await api.put('/auth/profile', userData);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('tokenExpiration');
        window.location.reload();
    },
};

// Course API
export const courseAPI = {
    getAll: async () => {
        const response = await api.get('/courses');
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await api.get(`/courses/${slug}`);
        return response.data;
    },

    getPresentations: async (courseId: number) => {
        const response = await api.get(`/courses/${courseId}/presentations`);
        return response.data;
    },

    getRecordings: async (courseId: number) => {
        const response = await api.get(`/courses/${courseId}/recordings`);
        return response.data;
    },

    getAllPresentations: async () => {
        const response = await api.get('/courses/presentations/all');
        return response.data;
    },

    getAllRecordings: async () => {
        const response = await api.get('/courses/recordings/all');
        return response.data;
    },
};

// Enrollment API
export const enrollmentAPI = {
    enroll: async (courseId: number) => {
        const response = await api.post(`/enrollments/${courseId}`);
        return response.data;
    },

    getMyEnrollments: async () => {
        const response = await api.get('/enrollments/my/enrollments');
        return response.data;
    },

    updateProgress: async (courseId: number, progress: number) => {
        const response = await api.put(`/enrollments/${courseId}/progress`, { progress });
        return response.data;
    },

    unenroll: async (courseId: number) => {
        const response = await api.delete(`/enrollments/${courseId}`);
        return response.data;
    },
};

// Presentation API
export const presentationAPI = {
    getByCourse: async (courseId: number) => {
        const response = await api.get(`/presentations/course/${courseId}`);
        return response.data;
    },

    create: async (presentationData: {
        course_id: number;
        title: string;
        description?: string;
        file_url?: string;
        order_index?: number;
    }) => {
        const response = await api.post('/presentations', presentationData);
        return response.data;
    },

    update: async (
        id: number,
        presentationData: {
            title?: string;
            description?: string;
            file_url?: string;
            order_index?: number;
        }
    ) => {
        const response = await api.put(`/presentations/${id}`, presentationData);
        return response.data;
    },

    delete: async (id: number) => {
        const response = await api.delete(`/presentations/${id}`);
        return response.data;
    },
};

// Recording API
export const recordingAPI = {
    getByCourse: async (courseId: number) => {
        const response = await api.get(`/recordings/course/${courseId}`);
        return response.data;
    },

    create: async (recordingData: {
        course_id: number;
        title: string;
        description?: string;
        video_url?: string;
        duration?: number;
        order_index?: number;
    }) => {
        const response = await api.post('/recordings', recordingData);
        return response.data;
    },

    update: async (
        id: number,
        recordingData: {
            title?: string;
            description?: string;
            video_url?: string;
            duration?: number;
            order_index?: number;
        }
    ) => {
        const response = await api.put(`/recordings/${id}`, recordingData);
        return response.data;
    },

    delete: async (id: number) => {
        const response = await api.delete(`/recordings/${id}`);
        return response.data;
    },
};

// Contact API
export const contactAPI = {
    submit: async (contactData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
    }) => {
        console.log('Sending data to API:', contactData);
        const response = await api.post('/contact', contactData);
        return response.data;
    },
};

export default api;
