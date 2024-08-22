import React from 'react'
import "@/app/globals.css";
import { IoIosArrowForward } from 'react-icons/io';

export default function HeroSectionWebInfo({ title }) {
    return (
        <div className='setCenter bg-slate-100'>
            <div className='w-[95%] 2xl:w-[70%]  '>
                <div className='h-auto my-4'>
                    <div className='flex flex-row gap-2 text-zinc-600 my-10'><span className='hover:underline'>Home</span> <IoIosArrowForward className="mt-[3px]" /> <span className='hover:underline'>Website Information</span> <IoIosArrowForward className="mt-[3px]" /> <span className='hover:underline'>{title}</span> </div>
                    <h1 className='text-6xl font-bold  mb-20'>{title}</h1>
                </div>


            </div>
        </div>
    )
}
