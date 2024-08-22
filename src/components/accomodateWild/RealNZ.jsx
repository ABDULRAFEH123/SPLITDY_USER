import "@/app/globals.css";
import MakePlan from "./MakePlan";
import BookNow from "./BookNow";
import { useDispatch, useSelector } from "react-redux";
import { getAccomodation } from "@/store/user/userThunk";
import { useEffect } from "react";

export default function RealNZ({ accomodate }) {
  const dispatch = useDispatch();
  const { accomodation, loading, error } = useSelector((state) => state.user);

  // console.log(itineraries, "its all the itineraries");
  useEffect(() => {
    dispatch(getAccomodation());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col items-center mt-[100px] px-4 md:px-0 font-serif">
        <div className="setCenter">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-nowrap ">
              {accomodate.title}
            </h1>
            <p className="text-lg md:text-2xl lg:text-[29px] 2xl:text-[32px] my-14  ">
              {accomodate.description}
            </p>
        </div>
        <MakePlan accomodate={accomodate} />
      </div>
      <BookNow />
    </div>
  );
}
