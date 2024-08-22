import HeroSection from '../common/HeroSection';
import herosectionImg from "@/assets/herosection-img.jpg";

export default function HomeHeroSection() {
    const heading = ["IF", "YOU", "SEEK"];
    const paragraph = "Across our incredible country, you can find everything from untamed wilderness to rich culture. There's more to find in Aotearoa New Zealand.";
    const buttonText = "Start seeking";

    return (
        <div>
            <HeroSection
                imageSrc={herosectionImg}
                heading={heading}
                paragraph={paragraph}
                buttonText={buttonText}
            />
        </div>
    );
}
