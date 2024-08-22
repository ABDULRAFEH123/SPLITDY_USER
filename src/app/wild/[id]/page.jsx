"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SocialMedia from "@/components/common/SocialMedia";
import CardSection1 from "@/components/destinantions/CardSection1";
import CardSection4 from "@/components/planyourtrip/FindPlacesToStay";
import YouMayAlsoInterestedIn from "@/components/planyourtrip/YouMayAlsoInterestedIn";
import PricingGrid from "@/components/wild/PricingGrid";
import RealNZ from "@/components/wild/RealNZ";
import { getAccomodation, getItineraries } from "@/store/user/userThunk";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const { id } = useParams();

  const { itineraries } = useSelector((state) => state.user);
  console.log("Itineraries from Redux:", itineraries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItineraries());
  }, [dispatch]);




  const itinerary = itineraries?.find((item) => item._id === id);
  console.log("Found Itinerary:", itinerary);

  if (!itinerary) {
    console.log("Itinerary not found, showing loading...");
    return <p>Loading...</p>; 
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <RealNZ itinerary={itinerary} />
      <PricingGrid itinerary={itinerary} />
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
