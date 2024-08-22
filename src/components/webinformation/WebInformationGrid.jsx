"use client"
import "@/app/globals.css";
import OptionsTable from "./OptionsTable";
import NeedHelp from "./NeedHelp";
import { usePathname } from "next/navigation"; 
import SiteFeedback from "./SiteFeedback";


export default function WebInformationGrid() {
    const pathname = usePathname(); 
    const isNeedHelp = pathname === "/web-information/need-help";
    const isSiteFeedBack = pathname === "/web-information/site-feedback";


    return (
        <div className="setCenter mt-20">
            <div className="w-[85%] ">
            <div className="grid grid-cols-12 gap-5">
             <div className="col-span-12 lg:col-span-3 mt-16"><OptionsTable/></div>
            { isNeedHelp ? (
                <div className="col-span-12 lg:col-span-9"><NeedHelp/></div>
            ):(
                <>
                <div className="col-span-12 lg:col-span-9"><SiteFeedback/></div>

                </>
            )} 
            </div>
            </div>

        </div>
    )
}
