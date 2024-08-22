import accomodationHero from "@/assets/accomodationHero.webp";
import FindSpecialPlaceToStay from "@/components/accomodations/FindSpecialPlaceToStay";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
export default function page() {
  return (
    <div className="flex flex-col overflow-hidden">
        <Header/>
      <ThingsToDoHeroSection heading={"heading"} image={accomodationHero}/>
      <ThingstodoTxtSection/>
      <FindSpecialPlaceToStay/>
      <Footer/>
    </div>
  )
}
