import "@/app/globals.css";
import MakePlan from "./MakePlan";
import BookNow from "./BoolNow";

export default function StaticRealNZ() {
  return (
    <div>

      <div className="flex flex-col items-center mt-[100px] px-4 md:px-0 font-serif">
        <div className="setCenter">
     
            <h1 className="text-3xl md:text-4xl  ">
              Wild Kiwi Encounter - RealNZ
            </h1>
            <p className="text-lg md:text-2xl lg:text-[29px] 2xl:text-[32px] my-14 text-center px-[40px]  ">
              From Oban, Stewart Island, cruise to Little Glory Bay for an opportunity to encounter wild southern brown kiwi in their unspoiled natural habitat.
            </p>

        </div>
        <MakePlan />
      </div>
      <BookNow />
    </div>
  );
}
