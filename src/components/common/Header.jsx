"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname hooks
import { FaBars, FaTimes } from "react-icons/fa";
import Splitdylogo from "@/assets/SplitdyboatLogo.webp";
import Link from "next/link";

export default function Header() {
  const router = useRouter(); // Get the router object
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
    router.push(link); // Navigate to the respective page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-[#3B5998] text-white w-screen sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={Splitdylogo} alt="Splitdy logo" className="h-auto w-[350px]" />
        </div>
        <nav className="hidden lg:flex cursor-pointer">
          <ul className="flex space-x-8 text-nowrap text-xs">
            {[
              { name: "Places to visit", path: "/places-to-visit" },
              { name: "Things to do", path: "/things-to-do" },
              { name: "Find accommodation", path: "/destinations" },
              { name: "Plan your trip", path: "/plan-your-trip" },
              { name: "Wild Kiwi", path: "/wild-static" },
            ].map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <span
                    className={`hover:text-gray-400 ${pathname === link.path ? "underline" : ""
                      }`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-2 mr-[20px]">
          <div className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="hidden lg:flex">
            <select className="bg-transparent text-sm text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white">
              <option className="text-black hover:text-white">English</option>
              <option className="text-black hover:text-white">繁體</option>
            </select>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ?
              <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="xl:hidden bg-[#3B5998] text-white p-4 h-[100vh]">
          <ul className="flex flex-col space-y-4 text-xs">
            {[
              { name: "Places to visit", path: "/places-to-visit" },
              { name: "Things to do", path: "/things-to-do" },
              { name: "Find accommodation", path: "/destinations" },
              { name: "Plan your trip", path: "/plan-your-trip" },
              { name: "Wild Kiwi", path: "/wild-static" },
            ].map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <span
                    className={`hover:text-gray-400 ${pathname === link.path ? "underline" : ""
                      }`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex items-center">
              <select className="bg-transparent w-auto text-xs ml-[-5px] text-white rounded focus:outline-none focus:ring-2 focus:ring-white">
                <option className="text-black hover:text-white">United Kingdom</option>
                <option className="text-black hover:text-white">繁體</option>
              </select>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
