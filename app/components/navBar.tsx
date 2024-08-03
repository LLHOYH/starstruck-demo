"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id:1,name: "For You", route: "/foryou", fakeRoute: "/" },
    { id:2,name: "My Marketplaces", route: "/my", fakeRoute: "/" },
    { id:3,name: "Top Ranked", route: "/topranked", fakeRoute: "/topranked" },
    { id:4,name: "App Integration", route: "/appintegration", fakeRoute: "/" },
    { id:5,name: "Reward", route: "/reward", fakeRoute: "/" },
    { id:6,name: "Services", route: "/services", fakeRoute: "/" },
    { id:7,name: "Review", route: "/review", fakeRoute: "/" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className={`block px-4 py-2 text-sm ${
                pathname === item.route
                  ? "text-blue-700 bg-gray-100"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
              }`}
              href={item.fakeRoute}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <div className="items-center justify-start hidden w-full h-20 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            className={`w-44 h-20 flex justify-center items-center hover:border-b-2 hover:border-blue-700 ${
              pathname === item.route ? "border-b-2 border-blue-700" : ""
            }`}
            href={item.fakeRoute}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;