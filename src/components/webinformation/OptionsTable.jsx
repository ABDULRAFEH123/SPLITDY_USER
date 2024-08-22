"use client"
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function OptionsTable() {
    const [currentPath, setCurrentPath] = useState("");

    const options = [
        { name: "FAQs", link: "/faqs" }, // Add actual links
        { name: "Request a map", link: "/request-map" },
        { name: "Site Feedback", link: "/web-information/site-feedback" },
        { name: "Need Help", link: "/web-information/need-help" }
    ];

    useEffect(() => {
        setCurrentPath(window.location.pathname); // Set the current path on component mount
    }, []);

    return (
        <div className="w-[90%]">
            <h1 className="text-xl font-medium border-b-2 border-zinc-100 p-4">
                Contact Us
            </h1>
            {options.map((option, index) => {
                const isActive = currentPath === option.link;

                return (
                    <div 
                        key={index} 
                        className={`border-b-2 border-zinc-100 p-2 font-thin flex flex-row justify-between 
                            ${isActive ? "text-gray-400" : "text-green-700"} 
                            ${isActive ? "" : "hover:underline cursor-pointer"}`}
                    >
                        <a 
                            href={option.link}
                            className="flex-grow"
                        >
                            {option.name}
                        </a>
                        {!isActive && <IoIosArrowForward />}
                    </div>
                );
            })}
        </div>
    );
}
