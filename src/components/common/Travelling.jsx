import CardGrid from "./common/CardGrid"
import car from "../assets/car.webp"
import plane from "../assets/plane.webp"
import bed from "../assets/bed.webp"
import bus from "../assets/bus.webp"
import "@/app/globals.css";


export default function Travelling() {
  const DataGrid = [
    { icon: car, title: 'Driving', description: 'Get familiar with driving in New Zealand.' },
    { icon: bus, title: 'Public transport', description: "Find out how to get around without hiring a vehicle." },
    { icon: bed, title: 'Accommodation ', description: "Explore different accommodation options." },
    { icon: plane, title: 'Domestic flights ', description: "Flights are easy to catch and are no longer than two hours." },
  ]
  return (
    <div className="setCenter">
      <div className="w-[85%]">
        <h1 className="boldHeadings ">Travelling around Hong Kong</h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DataGrid.map((item, index) => (
            <CardGrid
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <p className="text-xs text-[#3C8637] text-left my-12 ">See more transport options  </p>

      </div>
    </div>
  )
}
