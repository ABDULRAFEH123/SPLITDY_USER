"use client";
import { useEffect, useState } from "react";
import Map from "../destinantions/Map";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BookNow from "./BookNow";
import { getItineraries } from "@/store/user/userThunk";
import { useDispatch, useSelector } from "react-redux";

const Pricing = ({ itinerary }) => {
  console.log(itinerary, "its inside the component");
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
              {Array.isArray(itinerary?.itinerary?.prices) &&
              itinerary?.itinerary?.prices?.length > 0 ? (
                itinerary?.itinerary?.prices.map((price, index) => (
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
                    {Array.isArray(itinerary?.itinerary?.ageRestrictions) &&
                    itinerary?.itinerary?.ageRestrictions?.length > 0 ? (
                      itinerary?.itinerary?.ageRestrictions?.map(
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
                    {Array.isArray(itinerary.itinerary.termsConditions) &&
                    itinerary.itinerary.termsConditions.length > 0 ? (
                      itinerary.itinerary.termsConditions.map(
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
                    {Array.isArray(itinerary.itinerary.cancellationPolicies) &&
                    itinerary.itinerary.cancellationPolicies.length > 0 ? (
                      itinerary.itinerary.cancellationPolicies.map(
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
            {itinerary?.itinerary?.about ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: itinerary?.itinerary?.about,
                }}
              />
            ) : (
              "NO DATA IS FOUND"
            )}
          </div>
        </div>

        <div className="my-20">
          <h1 className="text-2xl font-semibold">Opening Times</h1>
          {Array.isArray(itinerary?.itinerary?.openingTimes) &&
          itinerary?.itinerary?.openingTimes?.length > 0 ? (
            itinerary?.itinerary?.openingTimes.map((time, index) => (
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
          <Map className="h-auto" itinerary={itinerary} />
        </div>
        <BookNow />
      </div>
    </>
  );
};

export default Pricing;
