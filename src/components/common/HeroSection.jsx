import Image from "next/image";
import "../app/globals.css";
import { Akronim, Actor } from "next/font/google";

const akronim = Akronim({
    subsets: ['latin'],
    weight: '400',
});

const actor = Actor({
    subsets: ['latin'],
    weight: '400',
});

export default function HeroSection({ imageSrc, heading , paragraph = '', buttonText = 'Start seeking' }) {
    return (
        <div className="relative">
            <Image src={imageSrc} alt="herosection-img" className="w-screen" />

            <div className="absolute inset-0">
                <div className="text-white mt-16 ml-24 w-[40%] items-start relative">
                    <div className={actor.className}>
                        <div className="font-thin text-5xl">
                            {heading.map((line, index) => (
                                <h1 key={index} className={index !== 0 ? "mt-5" : ""}>{line}</h1>
                            ))}
                        </div>
                    </div>
                    <p className={`${akronim.className} mt-5`}>
                        {paragraph}
                    </p>
                 
                </div>
                <div className="flex justify-center mt-10 items-center h-auto">
                    <button className="bg-black rounded-full border-8 p-7"></button>
                </div>
            </div>
        </div>
    );
}
