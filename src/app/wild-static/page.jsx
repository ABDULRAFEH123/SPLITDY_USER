
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SocialMedia from "@/components/common/SocialMedia";
import CardSection1 from "@/components/destinantions/CardSection1";
import CardSection4 from "@/components/planyourtrip/FindPlacesToStay";
import YouMayAlsoInterestedIn from "@/components/planyourtrip/YouMayAlsoInterestedIn";
import PricingGrid from "@/components/wildStatic/PricingGrid";
import StaticRealNZ from "@/components/wildStatic/StaticRealNZ";


export default function Page() {


  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
    
      <StaticRealNZ  />
      <PricingGrid />
      <div className=" bg-[#F8F8F8]">
        <CardSection1 />
        <CardSection4 />
        <YouMayAlsoInterestedIn />  
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}
