import "@/app/globals.css";
import Map from "../destinantions/Map";

const heading = "Top places to visit in the North Island"
const txt = "Whether you prefer mountains or beaches, here are some of the places you must visit when travelling around North Island."
export default function NorthMap() {
    return (
        <div>
            <div className="setCenter my-14">
                <div className="w-[85%]">
                    <Map />
                </div>
            </div>
        </div>
    )
}
