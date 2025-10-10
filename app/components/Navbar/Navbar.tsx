import Contactus from "./Contactus";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Link from "next/link";
import React from "react";
import Registerdialog from "./Registerdialog";
import Signdialog from "./Signdialog";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Courses', href: '#courses-section', current: false },
    { name: 'About Us', href: '#About-Us-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
    { name: 'Join', href: '#join-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-lightpink navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            <Link href="/" className="flex items-center space-x-2">
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

                            {/* ---------- END LOGO ---------- */}







                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-purple' : 'hover:text-purple',
                                                'px-3 py-4 text-15px font-medium space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Contactus />
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        <Signdialog />


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
