"use client";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

const Signin = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className='hidden md:block'>
                    <button
                        className="
  bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6]
  hover:shadow-[0_0_12px_rgba(92,110,248,0.35)]
  hover:scale-105 active:scale-95
  transition-all duration-300
  text-white font-medium my-2 py-2 px-4 rounded"
                        onClick={openModal}
                    >
                        Log In
                    </button>

                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                {/* <img
                                                    className="mx-auto h-12 w-auto"
                                                    src="/assets/logo/Logo.svg"
                                                    alt="Your Company"
                                                /> */}
                                                {/* <div className="w-full max-w-md space-y-8"> */}
                                                <div className="mx-auto">
                                                    <Link href="/" className="flex items-center space-x-2 select-none">
                                                        <motion.svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 600 160"
                                                            className="h-20 w-auto"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.8 }}
                                                        >
                                                            {/* Blue Circle */}
                                                            <circle cx="120" cy="80" r="70" fill="#0d47a1" />

                                                            {/* --- EDU (centered in circle, white) --- */}
                                                            <text
                                                                x="120"
                                                                y="95"
                                                                textAnchor="middle"
                                                                fontFamily="'Playfair Display', serif"
                                                                fontWeight="700"
                                                                fontSize="60"
                                                                fill="#ffffff"
                                                            >
                                                                Edu
                                                            </text>

                                                            {/* --- SPHERE (blue text, right next to circle) --- */}
                                                            <text
                                                                x="200"
                                                                y="95"
                                                                fontFamily="'Playfair Display', serif"
                                                                fontWeight="700"
                                                                fontSize="60"
                                                                fill="#0d47a1"
                                                            >
                                                                Sphere
                                                            </text>

                                                            {/* --- underline (only under Sphere) --- */}
                                                            <line
                                                                x1="200"
                                                                y1="105"
                                                                x2="415"
                                                                y2="105"
                                                                stroke="#0d47a1"
                                                                strokeWidth="2"
                                                            />

                                                            {/* --- tagline (centered under Sphere) --- */}
                                                            <text
                                                                x="310"
                                                                y="132"
                                                                textAnchor="middle"
                                                                fontFamily="'Playfair Display', serif"
                                                                fontSize="20"
                                                                fill="#0d47a1"
                                                                letterSpacing="0.4"
                                                            >
                                                                Learn. Apply. Succeed.
                                                            </text>
                                                        </motion.svg>
                                                    </Link>

                                                </div>
                                                {/* </div> */}

                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Sign in to your account
                                                </h2>
                                            </div>
                                            <form className="mt-8 space-y-6" action="#" method="POST">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="-space-y-px rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="email-address" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email-address"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="sr-only">
                                                            Password
                                                        </label>
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                            Remember me
                                                        </label>
                                                    </div>

                                                    <div className="text-sm">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                        </span>
                                                        Sign in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Signin;
