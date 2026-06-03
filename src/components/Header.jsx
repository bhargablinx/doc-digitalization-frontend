import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // just for testing

    const navLinks = isLoggedIn
        ? [
              { to: "/dashboard", label: "Dashboard" },
              { to: "/upload", label: "Upload" },
              { to: "/profile", label: "Profile" },
              { to: "/logout", label: "Logout" },
          ]
        : [
              { to: "/", label: "Home" },
              { to: "/login", label: "Login" },
              { to: "/register", label: "Register" },
          ];

    return (
        <header className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <NavLink to={"/"} className="font-bold text-xl">
                    VoltVerify
                </NavLink>

                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-gray-800 font-semibold transition-colors"
                                    : "hover:text-gray-600 transition-colors"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {!isLoggedIn && (
                    <div className="flex items-center gap-3">
                        <NavLink
                            to={"/login"}
                            className="px-4 py-2 border border-gray-300 rounded-lg"
                        >
                            Sign In
                        </NavLink>

                        <NavLink
                            to={"/register"}
                            className="px-4 py-2 bg-black text-white rounded-lg"
                        >
                            Get Started
                        </NavLink>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
