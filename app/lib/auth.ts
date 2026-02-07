// Authentication utilities

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    address?: string;
    role: 'student' | 'instructor' | 'admin';
    is_active: boolean;
    created_at: string;
}

/**
 * Get stored authentication token
 */
export const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};

/**
 * Get stored user data
 */
export const getUser = (): User | null => {
    if (typeof window !== 'undefined') {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch (error) {
                return null;
            }
        }
    }
    return null;
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
    return !!getToken();
};

/**
 * Check if user is active
 */
export const isActive = (): boolean => {
    const user = getUser();
    return user?.is_active === true;
};

/**
 * Check if user is authenticated AND active
 */
export const isAuthenticatedAndActive = (): boolean => {
    return isAuthenticated() && isActive();
};

/**
 * Check if user has a specific role
 */
export const hasRole = (role: 'student' | 'instructor' | 'admin'): boolean => {
    const user = getUser();
    return user?.role === role;
};

/**
 * Clear authentication data
 */
export const clearAuth = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};

/**
 * Set authentication data
 */
export const setAuth = (token: string, user: User): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }
};
