"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { courseAPI, enrollmentAPI } from "../../lib/api";
import { isAuthenticated } from "../../lib/auth";
import {
  AcademicCapIcon,
  ClockIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
  PlayIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";

// Import enhanced course data
import enhancedCourseData from "../../data/enhanced-course-data.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  duration: number;
  level: string;
  instructor_name: string;
}

interface Presentation {
  id: number;
  title: string;
  description: string;
  file_url: string;
  order_index: number;
}

interface Recording {
  id: number;
  title: string;
  description: string;
  video_url: string;
  duration: number;
  order_index: number;
}

interface EnhancedCourseModule {
  id: number;
  title: string;
  duration: string;
  summary: string;
  topics: string[];
  learningOutcomes: string[];
}

interface EnhancedCourseData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  duration: number;
  durationWeeks: number;
  rating: number;
  studentsEnrolled: number;
  price: number;
  currency: string;
  seatsLeft: number;
  instructor: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  highlights: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  modules: EnhancedCourseModule[];
  faq: Array<{ question: string; answer: string }>;
}

const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m`;
};

const formatVideoDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

const formatPrice = (price: number, currency: string): string => {
  if (currency === "INR") {
    return `₹${price.toLocaleString("en-IN")}`;
  }
  return `${currency} ${price}`;
};

const getCurrentUserIdentifier = (): string => {
  try {
    const userRaw = localStorage.getItem("user");
    if (!userRaw) return "anonymous";

    const user = JSON.parse(userRaw);
    return String(user?.id || user?.email || "anonymous");
  } catch {
    return "anonymous";
  }
};

const getCourseAccessKey = (courseSlug: string): string => {
  return `course-access:${getCurrentUserIdentifier()}:${courseSlug}`;
};

export default function CoursePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [presentations, setPresentations] = useState<Presentation[]>([]);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "presentations" | "recordings">("overview");
  const [loading, setLoading] = useState(true);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showAccessPrompt, setShowAccessPrompt] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [accessError, setAccessError] = useState("");
  const [enrollLoading, setEnrollLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const previewSectionRef = useRef<HTMLDivElement | null>(null);

  // Get enhanced course data - ensure proper fallback
  const enhancedData: EnhancedCourseData | undefined = slug ? (enhancedCourseData as Record<string, EnhancedCourseData>)[slug] : undefined;
  
  // Debug logging
  if (!course && !enhancedData && slug) {
    console.warn(`Course not found for slug: ${slug}`, {
      availableCourses: Object.keys(enhancedCourseData as any),
      requestedSlug: slug,
    });
  }

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        
        // If we have enhanced data, we can show it while fetching API data
        if (enhancedData) {
          setLoading(false);
        }

        const courseResponse = await courseAPI.getBySlug(slug);

        if (courseResponse.success) {
          const courseData = courseResponse.data.course;
          setCourse(courseData);

          // Fetch presentations and recordings
          const [presResponse, recResponse] = await Promise.all([
            courseAPI.getPresentations(courseData.id),
            courseAPI.getRecordings(courseData.id),
          ]);

          if (presResponse.success) {
            setPresentations(presResponse.data.presentations);
          }
          if (recResponse.success) {
            setRecordings(recResponse.data.recordings);
          }
        } else {
          // If API fails but we have enhanced data, that's fine
          if (!enhancedData) {
            console.error("Failed to fetch course data:", courseResponse);
          }
        }
      } catch (error) {
        console.error("Failed to fetch course data:", error);
        // Don't set loading to false here if we have enhanced data
        if (!enhancedData) {
          setLoading(false);
        }
      } finally {
        if (!enhancedData) {
          setLoading(false);
        }
      }
    };

    if (slug) {
      fetchCourseData();
    }
  }, [slug, enhancedData]);

  useEffect(() => {
    if (isAuthenticated() && searchParams.get("unlock") === "true") {
      setShowAccessPrompt(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!slug || !isAuthenticated()) {
      setHasAccess(false);
      return;
    }

    const cachedAccess = localStorage.getItem(getCourseAccessKey(slug)) === "true";
    if (cachedAccess) {
      setHasAccess(true);
    }
  }, [slug]);

  useEffect(() => {
    const syncEnrollmentAccess = async () => {
      if (!isAuthenticated() || !course?.id || !slug) return;

      try {
        const response = await enrollmentAPI.getMyEnrollments();
        const enrollments = response?.data?.enrollments || [];
        const enrolled = enrollments.some((enrollment: any) => Number(enrollment.course_id) === Number(course.id));

        setHasAccess(enrolled);
        localStorage.setItem(getCourseAccessKey(slug), enrolled ? "true" : "false");

        if (enrolled) {
          setShowAccessPrompt(false);
        }
      } catch {
        // Keep cached access state if enrollment sync fails.
      }
    };

    syncEnrollmentAccess();
  }, [course?.id, slug]);

  useEffect(() => {
    if (showPreview && previewSectionRef.current) {
      previewSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showPreview]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course && !enhancedData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-2">The course you&apos;re looking for doesn&apos;t exist.</p>
          <p className="text-sm text-gray-500 mb-8">Requested course slug: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code></p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/presentations"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition"
            >
              Browse Courses
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const displayCourse = course || (enhancedData ? {
    id: 0,
    title: enhancedData.title,
    slug: enhancedData.slug,
    description: enhancedData.description,
    duration: enhancedData.duration,
    level: enhancedData.level,
    instructor_name: enhancedData.instructor.name,
  } : null);

  if (!displayCourse) return null;

  const levelColors = {
    beginner: "from-green-600 to-emerald-600",
    intermediate: "from-blue-600 to-cyan-600",
    advanced: "from-purple-600 to-pink-600",
  };

  const levelColor = levelColors[displayCourse.level as keyof typeof levelColors] || "from-gray-500 to-gray-700";
  const loggedIn = isAuthenticated();

  const handleEnrollClick = () => {
    setAccessError("");
    setEnrollSuccess("");
    setShowAccessPrompt(true);
  };

  const handleAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setEnrollLoading(true);
      setAccessError("");

      const normalizedCode = accessCode.trim().toUpperCase();
      if (!normalizedCode) {
        setAccessError("Access code is required.");
        return;
      }

      // Always prefer the numeric course id when available; fall back to the
      // URL slug so enrollment works even if the course API call failed.
      const courseIdentifier = course?.id || slug;
      if (!courseIdentifier) {
        setAccessError("Unable to identify course. Please refresh and try again.");
        return;
      }

      const enrollResponse = await enrollmentAPI.enroll(courseIdentifier, normalizedCode);

      setHasAccess(true);
      setShowAccessPrompt(false);
      setAccessCode("");
      setEnrollSuccess(enrollResponse?.message || "Access granted. You are now enrolled in this course!");

      if (slug) {
        localStorage.setItem(getCourseAccessKey(slug), "true");
      }
    } catch (error: any) {
      // error.message is already cleaned up by enrollmentAPI.enroll — show it directly.
      setAccessError(error?.message || "Enrollment failed. Please try again.");
    } finally {
      setEnrollLoading(false);
    }
  };

  const handlePreviewClick = () => {
    if (showPreview && previewSectionRef.current) {
      previewSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {showAccessPrompt && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Access Code</h3>
              <p className="text-gray-600 mb-5">Enter unique code for access.</p>

              <form onSubmit={handleAccessSubmit} className="space-y-4">
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Enter access code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-purple-500"
                />

                {accessError && (
                  <p className="text-sm text-red-600">{accessError}</p>
                )}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={enrollLoading}
                    className="flex-1 py-3 bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6] text-white rounded-xl font-semibold"
                  >
                    {enrollLoading ? "Enrolling..." : "Submit Code"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAccessPrompt(false)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <p className="mt-5 text-sm text-gray-500 border-t pt-4">
                Note: Contact team for access code.
              </p>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-r ${levelColor} rounded-3xl p-12 mb-8 shadow-2xl relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className={`px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase`}>
                {displayCourse.level}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                {enhancedData ? `${enhancedData.durationWeeks} weeks` : formatDuration(displayCourse.duration)}
              </span>
              {enhancedData && (
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold flex items-center gap-2">
                  <StarIconSolid className="w-4 h-4" />
                  {enhancedData.rating} Rating
                </span>
              )}
            </div>

            <h1 className="text-5xl font-bold text-white mb-4">{displayCourse.title}</h1>
            <p className="text-white text-lg mb-6 max-w-3xl">
              {enhancedData?.subtitle || displayCourse.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white mb-8">
              <div className="flex items-center gap-2">
                <DocumentTextIcon className="w-5 h-5" />
                <span>{presentations.length} Presentations</span>
              </div>
              <div className="flex items-center gap-2">
                <VideoCameraIcon className="w-5 h-5" />
                <span>{recordings.length} Recordings</span>
              </div>
              {enhancedData && (
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5" />
                  <span>{enhancedData.modules.length} Modules</span>
                </div>
              )}
            </div>

            <div className="flex gap-4 flex-wrap">
              {loggedIn && !hasAccess && (
                <button
                  type="button"
                  onClick={handleEnrollClick}
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <AcademicCapIcon className="w-5 h-5" />
                  Enter Access Code
                </button>
              )}
              {loggedIn && hasAccess && (
                <span className="px-8 py-4 bg-green-500 text-white rounded-xl font-bold flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5" />
                  Access Granted
                </span>
              )}
              <button
                type="button"
                onClick={handlePreviewClick}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all duration-300"
              >
                Preview Course
              </button>
            </div>
          </div>
        </motion.div>

        {!hasAccess && loggedIn && (
          <div className="mb-8 bg-white rounded-2xl border border-yellow-200 p-5 text-center">
            <p className="text-gray-800 font-semibold">Enter access code to view all course details.</p>
            <p className="text-sm text-gray-600 mt-1">Note: Contact team for access code.</p>
          </div>
        )}

        {enrollSuccess && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-4 text-center text-green-700 font-semibold">
            {enrollSuccess}
          </div>
        )}

        {showPreview && (
          <div ref={previewSectionRef} id="course-preview-section" className="mb-8 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Course Preview</h2>
            <p className="text-gray-700 text-lg mb-6">
              {enhancedData?.subtitle || displayCourse.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-semibold text-gray-900 capitalize">{displayCourse.level}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">
                  {enhancedData ? `${enhancedData.durationWeeks} weeks` : formatDuration(displayCourse.duration)}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500">Rating</p>
                <p className="font-semibold text-gray-900">{enhancedData?.rating || "N/A"}</p>
              </div>
            </div>

            {enhancedData?.highlights && enhancedData.highlights.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preview Highlights</h3>
                <ul className="space-y-2 mb-6">
                  {enhancedData.highlights.slice(0, 4).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {enhancedData?.modules && enhancedData.modules.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Curriculum</h3>
                <div className="space-y-3">
                  {enhancedData.modules.slice(0, 2).map((module) => (
                    <div key={module.id} className="p-4 border border-gray-200 rounded-xl">
                      <p className="font-semibold text-gray-900">{module.title}</p>
                      <p className="text-sm text-gray-600">{module.summary}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Tabs */}
        {hasAccess ? (
        <>
        <div className="bg-white rounded-2xl shadow-lg mb-8 p-2 flex gap-2 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: ChartBarIcon },
            ...(enhancedData ? [{ id: "curriculum", label: "Curriculum", icon: BookOpenIcon }] : []),
            { id: "presentations", label: "Presentations", icon: DocumentTextIcon },
            { id: "recordings", label: "Recordings", icon: VideoCameraIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id
                  ? `bg-gradient-to-r ${levelColor} text-white shadow-lg`
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Course Description */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Course</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{displayCourse.description}</p>

                {/* Course Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <DocumentTextIcon className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Study Materials</h3>
                    <p className="text-gray-600">{presentations.length} comprehensive presentations covering all topics</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                    <VideoCameraIcon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Video Lectures</h3>
                    <p className="text-gray-600">{recordings.length} recorded sessions with expert instructors</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <SparklesIcon className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Flexible Learning</h3>
                    <p className="text-gray-600">Learn at your own pace with lifetime access</p>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              {enhancedData && enhancedData.learningOutcomes && (
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {enhancedData.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Course Highlights */}
              {enhancedData && enhancedData.highlights && (
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {enhancedData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                        <SparklesIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                        <p className="text-gray-800 font-semibold">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {enhancedData && enhancedData.faq && (
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {enhancedData.faq.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 text-left">{item.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUpIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          )}
                        </button>
                        <AnimatePresence>
                          {expandedFaq === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 bg-white">
                                <p className="text-gray-700">{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "curriculum" && enhancedData && (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <p className="text-gray-600 mb-8">
                {enhancedData.modules.length} modules • {enhancedData.durationWeeks} weeks total
              </p>

              <div className="space-y-4">
                {enhancedData.modules.map((module, index) => (
                  <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                      className={`w-full flex items-center justify-between p-6 transition-colors ${expandedModule === index ? `bg-gradient-to-r ${levelColor} text-white` : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center gap-4 flex-1 text-left">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${expandedModule === index ? 'bg-white/20' : 'bg-white'
                          }`}>
                          <span className={expandedModule === index ? 'text-white' : 'text-gray-900'}>{module.id}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold text-lg mb-1 ${expandedModule === index ? 'text-white' : 'text-gray-900'}`}>
                            {module.title}
                          </h3>
                          <p className={`text-sm ${expandedModule === index ? 'text-white' : 'text-gray-600'}`}>
                            {module.summary}
                          </p>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-sm font-semibold ${expandedModule === index ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'
                          }`}>
                          {module.duration}
                        </div>
                      </div>
                      {expandedModule === index ? (
                        <ChevronUpIcon className="w-6 h-6 ml-4 flex-shrink-0" />
                      ) : (
                        <ChevronDownIcon className="w-6 h-6 text-gray-600 ml-4 flex-shrink-0" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedModule === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 bg-white border-t border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-3">Topics Covered:</h4>
                            <ul className="space-y-2 mb-6">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-3">
                                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{topic}</span>
                                </li>
                              ))}
                            </ul>

                            {module.learningOutcomes && module.learningOutcomes.length > 0 && (
                              <>
                                <h4 className="font-bold text-gray-900 mb-3">Learning Outcomes:</h4>
                                <ul className="space-y-2">
                                  {module.learningOutcomes.map((outcome, outcomeIndex) => (
                                    <li key={outcomeIndex} className="flex items-start gap-3">
                                      <StarIconSolid className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700">{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "presentations" && (
            <motion.div
              key="presentations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {presentations.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                  <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No presentations available yet.</p>
                </div>
              ) : (
                presentations.map((presentation, index) => (
                  <motion.div
                    key={presentation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-6 group"
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${levelColor} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <DocumentTextIcon className="w-8 h-8" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          Lecture #{presentation.order_index}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{presentation.title}</h3>
                      <p className="text-gray-600">{presentation.description}</p>
                    </div>

                    <a
                      href={presentation.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 bg-gradient-to-r ${levelColor} text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                    >
                      <ArrowDownTrayIcon className="w-5 h-5" />
                      Download
                    </a>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}

          {activeTab === "recordings" && (
            <motion.div
              key="recordings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {recordings.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                  <VideoCameraIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No recordings available yet.</p>
                </div>
              ) : (
                recordings.map((recording, index) => (
                  <motion.div
                    key={recording.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-6 group"
                  >
                    <div className="relative">
                      <div className={`w-32 h-20 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <PlayIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded text-white text-xs font-semibold">
                        {formatVideoDuration(recording.duration)}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          Session #{recording.order_index}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{recording.title}</h3>
                      <p className="text-gray-600">{recording.description}</p>
                    </div>

                    <a
                      href={recording.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 bg-gradient-to-r ${levelColor} text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                    >
                      <PlayIcon className="w-5 h-5" />
                      Watch
                    </a>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </>
        ) : null}
      </div>
    </div>
  );
}
