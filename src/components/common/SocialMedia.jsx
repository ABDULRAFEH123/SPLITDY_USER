import twitter from "@/assets/twitter.png";
import facebook from "@/assets/facebook.png";
import mail from "@/assets/mail.png";
import Image from "next/image";

export default function SocialMedia() {
    const socialmedia = [
        { src: facebook, alt: "Facebook" },
        { src: twitter, alt: "Twitter" },
        { src: mail, alt: "Mail" },
    ];

    return (
        <div className="setCenter">
            <h1 className="font-bold text-base">Share this page</h1>
            <div className="flex flex-row gap-2">
                {socialmedia.map((item, index) => (
                    <Image src={item.src} key={index} alt={item.alt} />
                ))}
            </div>
        </div>
    );
}
