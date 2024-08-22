import herosectionImg from "@/assets/Herothingstodo.webp"; // Import the specific image
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ListThingsTodo from "@/components/thingstodopage/ListThingsTodo";
import PlanYourTrip from "@/components/thingstodopage/PlanYourTrip";
import ThingsToDoCards from "@/components/thingstodopage/ThingsToDoCards";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
import TopAttractions from "@/components/thingstodopage/TopAttractions";

export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <ThingsToDoHeroSection title="THINGS TO DO IN" subtitle="HONG KONG" image={herosectionImg} />
            <ThingstodoTxtSection page={"Things To Do"} para={"With two unique islands, 14 national parks, and dozens of diverse cities, there are plenty of New Zealand attractions and activities to choose from."}/>
            <TopAttractions />
            <PlanYourTrip />
            <ThingsToDoCards />
            <ListThingsTodo />
            <Footer />
        </div>
    );
}
