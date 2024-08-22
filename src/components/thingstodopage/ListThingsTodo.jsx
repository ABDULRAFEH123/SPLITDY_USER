import "@/app/globals.css";
const categories =
  [{
    title: "Adventure",
    activities: ["Abseiling/Rappelling",  "Canyoning", "Caving", "Climbing", "Diving ","Snorkeling", "Paragliding","Walking & Hiking ",  "Kayaking", "Zip lining",],
  },
  {
    title: "Art, Culture & Heritage",
    activities: ["Heritage Attractions", "Literature", "Museums & Galleries", "Performing Arts", "Photography",],
  },
  {
    title: "Cycling & Mountain Biking",
    activities: [],
  },
  {
    title: "Events",
    activities: [],

  },
  {
    title: "Film in HK",
    activities: [],
  },
  {
    title: "Food & Drink",
    activities: [],
  },
 
  {
    title: "Nature & wildlife",
    activities: ["Bird Watching", "Dolphins", "Gardens & City Parks", "Parks and Reserves",  "Scenery & Landscapes",  "Stargazing",  "World Heritage Sites", ],
  },
  {
    title: "Tours",
    activities: ["Boat Cruises",  "Sailing", "Scenic Flights",],
  },

  {
    title: "Sports",
    activities: ["Fishing", "Golf",],
  },
  {
    title: "Urban Attractions",
    activities: [ "Shopping", "Theme parks"],
  },
 
  {
    title: "Holiday Type",
    activities: ["Backpacking", "Camping", "Family Friendly", "Luxury Travel", "Romance", ,],

  },];
export default function ListThingsTodo() {
  return (
    <div className="setCenter">
      <div className="w-[85%] 2xl:w-[70%]">
        <div className="px-4 py-8 text-xs lg:text-sm 2xl:text-lg">
          <h1 className="boldHeadings text-3xl">Things to do in Hong Kong</h1>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-6 gap-20">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="break-inside-avoid p-1 text-nowrap">
                <h2 className="font-semibold truncate">{category.title}</h2>
                <ul className=" list-inside">
                  {category.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-green-600 truncate">{activity}</li>
                  ))}
                </ul>
              </div>))}
          </div>
        </div>
      </div>
    </div>
  );
}