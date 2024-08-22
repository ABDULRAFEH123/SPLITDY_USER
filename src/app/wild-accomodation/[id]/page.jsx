"use client";
import PricingGrid from "@/components/accomodateWild/PricingGrid";
import RealNZ from "@/components/accomodateWild/RealNZ";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SocialMedia from "@/components/common/SocialMedia";
import CardSection1 from "@/components/destinantions/CardSection1";
import CardSection4 from "@/components/planyourtrip/FindPlacesToStay";
import YouMayAlsoInterestedIn from "@/components/planyourtrip/YouMayAlsoInterestedIn";

import { getAccomodation } from "@/store/user/userThunk";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const { id } = useParams();

  const { accomodation } = useSelector((state) => state.user);
  console.log("accomodation from Redux:", accomodation);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccomodation());
  }, []);


  const accomodate = accomodation?.find((item) => item._id === id);
  console.log("Found accomodate:", accomodate);

  if (!accomodate) {
    console.log("Itinerary not found, showing loading..."); // Debug: If itinerary is not found, show loading
    return <p>Loading...</p>; // Handle case where itinerary is not yet loaded or found
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      {/* Pass the found itinerary to the RealNZ component */}
      <RealNZ accomodate={accomodate} />
      <PricingGrid accomodate={accomodate} />
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
