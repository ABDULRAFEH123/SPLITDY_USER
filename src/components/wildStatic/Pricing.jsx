"use client"
import { useState } from 'react';
import Map from '../destinantions/Map';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import BookNow from './BoolNow';


const Price = [
    {
        text: "Adult (1-5 persons)",
        price: "$880.00",
    },
    {
        text: "Adult (6 persons)",
        price: "$860.00",
    },
    {
        text: "Adult (8 persons)",
        price: "$840.00",
    },
    {
        text: "Adult (10 persons)",
        price: "$820.00",
    },
    {
        text: "Adult (12 persons)",
        price: "$800.00",
    },
    {
        text: "Children under 12",
        price: "$400.00",
    },


]
const Pricing = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    return (
        <div className="w-[95%] lg:w-[80%] mx-auto px-4  font-serif ">
            <div >
                <h2 className="text-2xl font-semibold  mb-7 ">Price, Terms and Conditions</h2>
                <div className='bg-[#F8F8F8] p-2 '>
                    {Price.map((item, index) => (
                        <div key={index} className="flex  justify-between  p-1 rounded-md mb-2">
                            <span >{item.text}</span>
                            <span className='mr-6 md:mr-20 lg:mr-40 font-bold'>{item.price}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <div
                        className="border-b border-[#D8D8D8] py-6  cursor-pointer"
                        onClick={() => toggle(1)}
                    >
                        <div className="flex justify-between items-center">
                            <span>Age restriction</span>
                            <span>{open === 1 ? <IoIosArrowUp/> : <IoIosArrowDown />}</span>
                        </div>
                        {open === 1 && (
                            <div className="mt-2 text-gray-600">
                            </div>
                        )}
                    </div>
                    <div
                        className="border-b border-[#D8D8D8] py-6 cursor-pointer"
                        onClick={() => toggle(2)}
                    >
                        <div className="flex justify-between items-center">
                            <span>Terms and conditions</span>
                            <span>{open === 2 ? <IoIosArrowUp/> : <IoIosArrowDown />}</span>
                        </div>
                        {open === 2 && (
                            <div className="mt-2 text-gray-600">
                            </div>
                        )}
                    </div>
                    <div
                        className="border-b border-[#D8D8D8] py-6 cursor-pointer"
                        onClick={() => toggle(3)}
                    >
                        <div className="flex justify-between items-center">
                            <span>Cancellation Policy</span>
                            <span>{open === 3 ? <IoIosArrowUp/> : <IoIosArrowDown />}</span>
                        </div>
                        {open === 3 && (
                            <div className="mt-2 text-gray-600">
                                {/* Content for Cancellation Policy */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='my-20'>
                <h1 className="text-2xl font-semibold">About</h1>
                <p className='my-8'>Depart Halfmoon Bay, Stewart Island for a cruise to Little Glory Cove. Learn about Stewart Islands
                    rich history and disembark for a guided walk across the peninsula. As dusk sets in, and with your
                    guide, venture by torchlight through the native forest until the track emerges on to Ocean Beach.
                    This wide sandy beach is where the Southern brown kiwi (Rakiura Tokoeka) are found - often
                    searching for food.</p>
              

            </div>
            <div className='my-20'>
                <h1 className="text-2xl font-semibold">Opening Times</h1>
                <p className='my-8'>Months of operation: <br />
                    Jan, Feb, Mar, Apr, May, Oct, Nov, Dec
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl font-semibold'> Location</h1>
                <Map className='h-auto' />
            </div>
            <BookNow />
        </div>
    );
};


export default Pricing;
