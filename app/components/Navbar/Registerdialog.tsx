import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const Register = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden md:block'>
                    <button className="bg-purple hover:bg-purple hover:text-white text-white text-15px font-medium ml-8 py-4 px-5 rounded" onClick={openModal}>
                        Register
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
    <Link href="/" className="flex items-center justify-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 100"
        className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
      >
        <defs>
          {/* Shadow for "Edu" text */}
          <filter id="textShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" floodColor="#333" />
          </filter>
        </defs>

        {/* "Edu Sphere" */}
        <text
          x="30"
          y="50"
          fontFamily="Times New Roman, serif"
          fontWeight="bold"
          fontSize="40"
          fill="#ffffff"
          filter="url(#textShadow)"
        >
          Edu&nbsp;
        </text>

        <text
          x="122"
          y="50"
          fontFamily="Times New Roman, serif"
          fontWeight="bold"
          fontSize="40"
          fill="#0a4c94"
        >
          Sphere
        </text>

        {/* underline ending just under the word "Sphere" */}
        <line
          x1="122"
          y1="60"
          x2="242"
          y2="60"
          stroke="#0a4c94"
          strokeWidth="1.5"
        />

        {/* tagline under line */}
        <text
          x="122"
          y="80"
          fontFamily="Times New Roman, serif"
          fontSize="12"
          fill="#b6e3b1"
          letterSpacing="0.5"
        >
          Learn. Apply. Succeed.
        </text>
      </svg>
    </Link>
  </div>
{/* </div> */}

                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Register your account
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

                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                        </span>
                                                        Register Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
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

export default Register;
