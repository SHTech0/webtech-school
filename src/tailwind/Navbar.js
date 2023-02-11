import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/webtech-school-logo1.png";
function Navbar() {
    const [mobileNav, setMobileNav] = useState(false);
    const handleToggle = () => {
        setMobileNav(!mobileNav);
    };

    const links = [
        {
            id: 1,
            path: "/home",
            name: "Home",
        },
        { id: 2, path: "/courses", name: "Courses" },
    ];
    return (
        <>
            <nav className="bg-white dark:bg-secondary-main shadow-sm ">
                <div className=" container w-11/12 mx-auto">
                    <div className="flex justify-between items-center md:block">
                        <div className="flex space-x-7 justify-between items-center">
                            <div className="right-nav flex flex-row justify-start">
                                <div>
                                    <Link
                                        to="/"
                                        className="flex items-center py-4 px-2"
                                    >
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            className="w-10 mr-2"
                                        />
                                        <span className="font-Antonio font-bold text-secondary dark:text-primary text-3xl">
                                            Webtech School
                                        </span>
                                    </Link>
                                </div>
                                {/* <!-- Primary Navbar items --> */}
                                <div
                                    className={
                                        "hidden md:flex md:ml-8 items-center space-x-1"
                                    }
                                >
                                    {links.map((link) => (
                                        <Link
                                            key={link.id}
                                            to={link.path}
                                            className="
                                    py-4
                                    px-2
                                    text-primary
                                    dark:text-white
                                    before:scale-0
                                    relative
                                   
                                    hoverBefore
                                    font-semibold
                                "
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* <!-- Secondary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="
                                py-2
                                px-2
                                font-medium
                                
                                rounded
                                 text-primary
                                    dark:text-white
                                transition
                                duration-300
                            "
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="
                                py-2
                                px-2
                                font-medium
                                text-primary
                                    dark:text-white
                                
                                transition
                                duration-300
                            "
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden items-center">
                            <button
                                onClick={handleToggle}
                                className="outline-none mobile-menu-button"
                            >
                                <svg
                                    className="
                                    w-6
                                    h-6
                                    text-secondary
                                    focus:text-primary
                                "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={mobileNav ? "mobile-menu md:hidden" : "hidden"}>
                    <ul className="">
                        {links.map((link) => (
                            <li
                                key={link.id}
                                className="flex justify-center items-center"
                            >
                                <Link
                                    onClick={handleToggle}
                                    to={link.path}
                                    className="
                                    my-4
                                    px-2
                                    flex
                                    font-semibold
                                     text-secondary
                                    focus:text-primary
                                "
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
