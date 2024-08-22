"use client";
import "@/app/globals.css";

export default function DynamicText({ heading, text }) {
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <div className="setCenter">
      <div className="w-[70%] md:w-[45%] lg:w-[40%] xl:w-[37%] 2xl:w-[27%]">
        <div className="ml-0 md:-ml-[30%]">
          <h1 className="boldHeadings">
            {heading}
          </h1>
          {textArray.map((txt, index) => (
            <p key={index} className="text-xs  2xl:text-lg  mt-5">
              {txt}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
