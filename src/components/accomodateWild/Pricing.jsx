"use client";
import { useEffect, useState } from "react";
import Map from "../destinantions/Map";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BookNow from "./BookNow";
import { getItineraries } from "@/store/user/userThunk";
import { useDispatch, useSelector } from "react-redux";
import AccomodationMap from "../common/AccomodationMap";

// const Price = [
//   {
//     text: "Adult (1-5 persons)",
//     price: "$880.00",
//   },
//   {
//     text: "Adult (6 persons)",
//     price: "$860.00",
//   },
//   {
//     text: "Adult (8 persons)",
//     price: "$840.00",
//   },
//   {
//     text: "Adult (10 persons)",
//     price: "$820.00",
//   },
//   {
//     text: "Adult (12 persons)",
//     price: "$800.00",
//   },
//   {
//     text: "Children under 12",
//     price: "$400.00",
//   },
// ];
const Pricing = ({ accomodate }) => {
  console.log(accomodate, "its inside the component");
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <>
      <div className="w-[95%] lg:w-[80%] mx-auto px-4  font-serif ">
        <div>
          <h2 className="text-2xl font-semibold  mb-7 ">
            Price, Terms and Conditions
          </h2>

          <div className="bg-[#F8F8F8] p-2 ">
            <div className="bg-[#F8F8F8] p-2">
            {Array.isArray(accomodate?.accomodate?.prices) &&
              accomodate?.accomodate?.prices?.length > 0 ? (
                accomodate?.accomodate?.prices.map((price, index) => (
                  <div
                    key={index}
                    className="flex justify-between p-1 rounded-md mb-2"
                  >
                    <span>{`${price.category || "Category"} (${
                      price.name
                    })`}</span>
                    <span className="font-bold">
                      {price.value || "Price not available"}
                    </span>
                  </div>
                ))
              ) : (
                // Fallback content if prices are not found
                <div className="flex justify-between">
                  <p>Adult (1-5 persons)</p>
                  <p>$880.00</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="border-b border-[#D8D8D8] py-6 cursor-pointer"
              onClick={() => toggle(1)}
            >
              <div className="flex justify-between items-center">
                <span>Age restriction</span>
                <span>
                  {open === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {open === 1 && (
                <div className="mt-2 text-gray-600">
                  <ul className="list-disc pl-5">
                    {Array.isArray(accomodate.accomodate.ageRestrictions) &&
                    accomodate.accomodate.ageRestrictions.length > 0 ? (
                      accomodate.accomodate.ageRestrictions.map(
                        (restriction, index) => (
                          <li key={index}>{restriction.description}</li>
                        )
                      )
                    ) : (
                      <li>No age restrictions available</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div
              className="border-b border-[#D8D8D8] py-6 cursor-pointer"
              onClick={() => toggle(2)}
            >
              <div className="flex justify-between items-center">
                <span>Terms and conditions</span>
                <span>
                  {open === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {open === 2 && (
                <div className="mt-2 text-gray-600">
                  <ul className="list-disc pl-5">
                    {Array.isArray(accomodate.accomodate.termsConditions) &&
                    accomodate.accomodate.termsConditions.length > 0 ? (
                      accomodate.accomodate.termsConditions.map(
                        (condition, index) => (
                          <li key={index}>{condition.description}</li>
                        )
                      )
                    ) : (
                      <li>No terms and conditions available</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div
              className="border-b border-[#D8D8D8] py-6 cursor-pointer"
              onClick={() => toggle(3)}
            >
              <div className="flex justify-between items-center">
                <span>Cancellation Policy</span>
                <span>
                  {open === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {open === 3 && (
                <div className="mt-2 text-gray-600">
                  <ul className="list-disc pl-5">
                    {Array.isArray(
                      accomodate?.accomodate?.cancellationPolicies
                    ) &&
                    accomodate?.accomodate?.cancellationPolicies.length > 0 ? (
                      accomodate?.accomodate?.cancellationPolicies?.map(
                        (policy, index) => (
                          <li key={index}>{policy.description}</li>
                        )
                      )
                    ) : (
                      <li>No cancellation policies available</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="my-20">
          <h1 className="text-2xl font-semibold">About</h1>
          <div className="my-8">
            {accomodate?.accomodate?.about ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: accomodate.accomodate.about,
                }}
              />
            ) : (
              "NO DATA IS FOUND"
            )}
          </div>
        </div>

        <div className="my-20">
          <h1 className="text-2xl font-semibold">Opening Times</h1>
          {Array.isArray(accomodate?.accomodate?.openingTimes) &&
          accomodate?.accomodate?.openingTimes?.length > 0 ? (
            accomodate?.accomodate?.openingTimes.map((time, index) => (
              <div key={index} className="my-8">
                <p>
                  Opening Time: {time.openingTime} <br />
                  Closing Time: {time.closingTime} <br />
                  Month of operation: {time.month}
                </p>
              </div>
            ))
          ) : (
            <p>No opening times available</p>
          )}
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-semibold"> Location</h1>
          <AccomodationMap className="h-auto" accomodate={accomodate} />
        </div>
        <BookNow />
      </div>
    </>
  );
};

export default Pricing;
