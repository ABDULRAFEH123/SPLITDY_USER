import northimg from "@/assets/NorthHero.webp";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SocialMedia from "@/components/common/SocialMedia";
import CardSection1 from "@/components/destinantions/CardSection1";
import CardSection4 from "@/components/destinantions/CardSection4";
import CentralNorth from "@/components/planyourtrip/CentralNorth";
import NorthMap from "@/components/planyourtrip/NorthMap";
import YouMayAlsoInterestedIn from "@/components/planyourtrip/YouMayAlsoInterestedIn";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
export default function PlanYourTrips() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <ThingsToDoHeroSection description={"description"} image={northimg}/>
      <ThingstodoTxtSection page={"Plan Your Trip"} para={"New Zealand's North Island offers island sanctuaries and lively cities with a large helping of culture and history for a truly diverse holiday experience."}/>
      <CentralNorth />
      <NorthMap />
      <CardSection1/>
      <CardSection4/>
      <YouMayAlsoInterestedIn/>
      <SocialMedia />
      <Footer />
    </div>
  )
}