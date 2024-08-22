import "@/app/globals.css";
import CardGrid from "./common/CardGrid";
import info from "../assets/info.webp"
import plane from "../assets/plane.webp"
import firstaid from "../assets/firstaid.webp"

export default function TravelAdvice() {
  const itemGrid = [
    { icon: info, title: 'Visas and entry requirements', description: 'Learn more about the available visa options and entry requirements into New Zealand.' },
    { icon: firstaid, title: 'COVID-19 travel safety information ', description: "Find out more about New Zealand's COVID-19 travel safety and information." },
    { icon: plane, title: 'Flights to Hong Kong', description: "Find more information on finding flights to New Zealand." },

  ];

  return (
    <div className="setCenter">
      <div className="w-[85%]">
        <h1 className="boldHeadings ">
          Travel advice and safety</h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemGrid.map((item, index) => (
            <CardGrid
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <p className="text-xs text-[#3C8637] text-left my-12">See New Zealand travel guide </p>

      </div>

    </div>

  )
}
