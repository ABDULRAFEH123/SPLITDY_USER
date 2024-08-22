import destinationImg from "@/assets/destination.png";
import CardSection1 from "@/components/destinantions/CardSection1";
import CardSection4 from "@/components/destinantions/CardSection4";
import Map from "@/components/destinantions/Map";
import ThingsToSee from "@/components/destinantions/ThingsToSee";
import TopPlacesToVisit from "@/components/destinantions/TopPlacesToVisit";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
import SocialMedia from "@/components/common/SocialMedia";
export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <ThingsToDoHeroSection image={destinationImg} /> 
            <ThingstodoTxtSection  page={"Find Accomodation"} para={"Explore Aotearoa New Zealand's off-the-beaten- track destinations or hop between the North and South Islands to visit all the regions. You'll never run out of breathtaking places to see."}/>
            <TopPlacesToVisit/>
            <ThingsToSee/>
            <Map />
            <CardSection1 />
            <CardSection4 />
            <SocialMedia/>
            <Footer />
        </div>
    );
}
