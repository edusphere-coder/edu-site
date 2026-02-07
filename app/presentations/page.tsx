"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseAPI } from "../lib/api";
import {
    DocumentTextIcon,
    AcademicCapIcon,
    ArrowDownTrayIcon,
    SparklesIcon,
    ChevronRightIcon
} from "@heroicons/react/24/outline";

interface Course {
    id: number;
    title: string;
    slug: string;
}

interface Presentation {
    id: number;
    course_id: number;
    title: string;
    description: string;
    file_url: string;
    order_index: number;
    course_title: string;
    course_slug: string;
}

const COURSES = [
    { id: 1, title: "Machine Learning", slug: "machine-learning", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { id: 2, title: "Full Stack Java", slug: "full-stack-java", icon: "☕", color: "from-orange-500 to-red-500" },
    { id: 3, title: "Full Stack Python", slug: "full-stack-python", icon: "🐍", color: "from-blue-500 to-cyan-500" },
    { id: 4, title: "Data Analytics", slug: "data-analytics", icon: "📊", color: "from-green-500 to-emerald-500" },
    { id: 5, title: "Cyber Security", slug: "cyber-security", icon: "🔒", color: "from-red-500 to-rose-500" },
    { id: 6, title: "SAP", slug: "sap", icon: "💼", color: "from-indigo-500 to-purple-500" },
];

export default function PresentationsPage() {
    const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);
    const [presentations, setPresentations] = useState<Presentation[]>([]);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        fetchPresentations();
    }, []);

    const fetchPresentations = async () => {
        try {
            setLoading(true);
            const response = await courseAPI.getAllPresentations();
            if (response.success) {
                setPresentations(response.data.presentations);
            }
        } catch (error) {
            console.error("Failed to fetch presentations:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredPresentations = presentations.filter(
        (p) => p.course_id === selectedCourse.id
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                            <DocumentTextIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                                Course Presentations
                            </h1>
                            <p className="text-gray-600 mt-1">Access study materials and lecture slides</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Sidebar - Course Selection */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                            <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-500">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <AcademicCapIcon className="w-6 h-6" />
                                    Select Course
                                </h2>
                            </div>

                            <div className="p-4 space-y-2 max-h-[600px] overflow-y-auto">
                                {COURSES.map((course, index) => (
                                    <motion.button
                                        key={course.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setSelectedCourse(course)}
                                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
                      ${selectedCourse.id === course.id
                                                ? 'bg-gradient-to-r ' + course.color + ' text-white shadow-lg scale-105'
                                                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 relative z-10">
                                            <span className="text-3xl">{course.icon}</span>
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm">{course.title}</p>
                                                <p className={`text-xs mt-1 ${selectedCourse.id === course.id ? 'text-white/80' : 'text-gray-500'}`}>
                                                    {filteredPresentations.length > 0 && selectedCourse.id === course.id
                                                        ? `${filteredPresentations.length} presentations`
                                                        : presentations.filter(p => p.course_id === course.id).length + ' presentations'
                                                    }
                                                </p>
                                            </div>
                                            {selectedCourse.id === course.id && (
                                                <ChevronRightIcon className="w-5 h-5" />
                                            )}
                                        </div>

                                        {/* Animated background effect */}
                                        {selectedCourse.id === course.id && (
                                            <motion.div
                                                layoutId="activeCourseBg"
                                                className="absolute inset-0 bg-gradient-to-r opacity-20"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content - Presentations Grid */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCourse.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Course Header */}
                                <div className={`bg-gradient-to-r ${selectedCourse.color} rounded-3xl p-8 mb-6 shadow-2xl relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-6xl">{selectedCourse.icon}</span>
                                            <div>
                                                <h2 className="text-3xl font-bold text-white">{selectedCourse.title}</h2>
                                                <p className="text-white/90 mt-1">
                                                    {filteredPresentations.length} Presentation{filteredPresentations.length !== 1 ? 's' : ''} Available
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80">
                                            <SparklesIcon className="w-5 h-5" />
                                            <span className="text-sm">Download and study at your own pace</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Presentations Grid */}
                                {loading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                                                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                                                <div className="h-4 bg-gray-200 rounded w-2/3" />
                                            </div>
                                        ))}
                                    </div>
                                ) : filteredPresentations.length === 0 ? (
                                    <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                                        <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500 text-lg">No presentations available for this course yet.</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {filteredPresentations.map((presentation, index) => (
                                            <motion.div
                                                key={presentation.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
                                            >
                                                <div className={`h-2 bg-gradient-to-r ${selectedCourse.color}`} />

                                                <div className="p-6">
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedCourse.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                                            <DocumentTextIcon className="w-6 h-6" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                                    #{presentation.order_index}
                                                                </span>
                                                            </div>
                                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                                                                {presentation.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                                                        {presentation.description}
                                                    </p>

                                                    <a
                                                        href={presentation.file_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r ${selectedCourse.color} text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                                                    >
                                                        <ArrowDownTrayIcon className="w-5 h-5" />
                                                        Download PDF
                                                    </a>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
