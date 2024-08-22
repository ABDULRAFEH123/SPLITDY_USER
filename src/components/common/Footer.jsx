'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/app/globals.css";
import footerlogo from "@/assets/footer-logo.webp";
import Image from 'next/image';
import { usePathname } from "next/navigation"; 
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';

export default function Footer() {

    const pathname = usePathname(); 
    const isPlacesToVisit = pathname === "/places-to-visit";
    const isThingsToDoPage = pathname === "/things-to-do";
    const isDestination = pathname === "/destinations";
    const isPlanYourTrip = pathname === "/plan-your-trip";
    const isAccomodations = pathname === "/accommodations";



    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const footerData = [
        {
            id: 1,
            title: 'Find us on',
            items: [
                { text: 'X', link: '#', icon: 'fa-x-twitter' },
                { text: 'Instagram', link: '#', icon: 'fa-instagram' },
                { text: 'Facebook', link: '#', icon: 'fa-facebook-f' },
                { text: 'YouTube', link: '#', icon: 'fa-youtube' },
                { text: 'WeChat', link: '#', icon: 'fab fa-weixin' },

            ],
        },
        {
            id: 2,
            title: 'Contact us',
            items: [
                { text: 'Site feedback', link: '/web-information/site-feedback' },
                { text: 'Need help?', link: '/web-information/need-help' },
            ],
        },
        {
            id: 3,
            title: 'Help',
            items: [
                { text: 'FAQs', link: '/web-information/faq' },
                { text: 'About newzealand.com', link: '#' },
                { text: 'Adding your business and deals', link: '#' },
                { text: 'Linking to newzealand.com', link: '#' },
                { text: 'Terms of use', link: '/web-information/terms-of-use' },
                { text: 'Privacy Policy', link: '/web-information/privacy-policy' },
            ],
        },
    ];

    return (
        <div>
            <div className='bg-[#2D2D2D] text-white h-10 text-sm mt-10'>
                <div className='setCenter'>
                    <div className='mt-2  YouAreHere flex flex-row'>
                    <div className="flex flex-row items-center space-x-1">
      {isPlacesToVisit && (
        <>
          <span className='p-1 mr-2 rounded-md bg-[#171717]'>You are here</span> <a href="/">Home</a> 
        </>
      )}
      {isDestination && (
        <>
          <span className='p-1 mr-2 rounded-md bg-[#171717]'>You are here</span> <a href='/'>Home</a> <IoIosArrowForward className="mt-[2px]" /> <a href="/destinations">Destinations</a> 
        </>
      )}
      {isThingsToDoPage && (
        <>
          <span className='p-1 mr-2 rounded-md bg-[#171717]'>You are here</span> <a href="/">Home</a> <IoIosArrowForward className="mt-[2px]" /> <a href="/things-to-do">Things To Do</a> 
        </>
      )}
      {isPlanYourTrip && (
        <>
          <span className='p-1 mr-2 rounded-md bg-[#171717]'>You are here</span> <a href="/">Home</a>  <IoIosArrowForward className="mt-[2px]" /> <a href="/destinations">Destinations</a> <IoIosArrowForward className="mt-[2px]" /> <a href="/plan-your-trip">Outlying Islands</a> 
        </>
      )}
      {isAccomodations && (
        <>
          <span className='p-1 mr-2 rounded-md bg-[#171717]'>You are here</span> <a href="/">Home</a>  <IoIosArrowForward className="mt-[2px]" /> <a href="/accommodations">Accommodations</a>
        </>
      )}
      {!isPlacesToVisit && !isDestination && !isThingsToDoPage && !isPlanYourTrip && !isAccomodations && (
        <>
          <span className='p-1 mr-2 rounded-md bg-[#171717]'>You are here</span> <a href="/">Home</a> 
        </>
      )}
    </div>
                    </div>
                </div>
            </div>

            <footer className="bg-[#3B5998] text-white py-8">
                <div className='setCenter'>
                    <div className='w-[82%]'>
                        <div className='flex justify-center items-center h-auto'>
                            <div className="grid grid-cols-12 gap-3 ">
                                {footerData.map((section) => (
                                    <div key={section.id} className="col-span-12 md:col-span-6 lg:col-span-2 order-1 lg:order-none border-b border-gray-200 py-2 md:border-none">
                                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(section.id)}>
                                            <h2 className="font-bold mb-2">{section.title}</h2>
                                            <span className="ml-2 block md:hidden">{open === section.id ?<IoIosArrowUp/>  : <IoIosArrowDown />
                                            }</span>
                                        </div>
                                        <ul className={`text-sm mt-2 transition-all duration-30000 ${open === section.id ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:max-h-screen md:block`}>
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className="mb-1 text-left">
                                                    <a href={item.link} className="hover:underline text-xs">
                                                        {item.icon && <i className={`fab ${item.icon} mr-2`}></i>}
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                               <div className='flex flex-col md:flex-row lg:flex-col gap-1 md:gap-10 lg:gap-0 xl:gap-2 xl:flex-row col-span-12 lg:col-span-6 justify-center items-center md:items-start md:-ml-[10%] lg:ml-[15%] mt-2'>
                                    <div>
                                      <Link href="/">  <Image src={footerlogo} alt='logo' height={98} width={98} /></Link>
                                    </div>
                                    <p className='items-start mt-7 text-xl lg:text-2xl text-black text-nowrap'>
                                    <Link href="/"> <span className='font-bold'>Splitdyboat</span> 香港夾船平台 </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
