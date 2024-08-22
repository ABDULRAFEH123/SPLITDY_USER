import React from 'react'
import DynamicInformationText from './DynamicInformationText'
import "@/app/globals.css";


const text = [
    {
        heading: "Visitor visas and passports",
        text: ["From 1 October 2019, visitors from visa-waiver countries(opens in new window) must request an Electronic Travel Authority (ETA) prior to coming to New Zealand. You may also have to pay an International Visitor Conservation and Tourism Levy (IVL). For more information on the ETA and IVL, visit Immigration New Zealand.(opens in new window)",
            "You will only need to apply for a visitor visa if you are not from a visa waiver country. Please refer to the Immigration New Zealand(opens in new window) website for more information.",
            "Your passport(opens in new window) must be valid for at least one month after departure from New Zealand if your country has consular representation in New Zealand or three months after departure if it does not",
            "Working in New Zealand",
            "If you are under 30 years old or under and come from a participating country, you may qualify for our youth working holiday scheme. Find out more about the youth working holiday scheme here(opens in new window). Please refer to the Immigration New Zealand(opens in new window) website for other information on work visas.",
            "Migrating to New Zealand",
            "For official information on migrating to New Zealand please go to Immigration New Zealand(opens in new window).",
            "Study in New Zealand",
            "Immigration New Zealand(opens in new window) also provides official information on study visas.",
            "The Study New Zealand(opens in new window) website provides information on courses, institutions and scholarships.",]
    },
    {
        heading: "Customs and Quarantine Requirements",
        text: ["Please visit the Ministry for Primary Industries (Biosecurity/Quarantine) website(opens in new window) for what food, plant and animal items can be bought into New Zealand Please refer to the Customs New Zealand website for a list of any other items that are prohibited to bring into New Zealand(opens in new window).  There are specific cleaning requirements for fishing equipment."],
    },
    {
        heading: "General itinerary planning and finding a tour",
        text: ["You'll find a variety of awesome landscapes in New Zealand, all within easy reach of each other. Please refer to our Recommended Trips page for a collection of itineraries that range from 3 to 30 days. If you would like more information about tours in New Zealand, please visit our tours page.",
            "Air New Zealand Enquiries", "This is the official website for Tourism New Zealand. For information and enquiries about Air New Zealand, please visit their official website at www.airnewzealand.com(opens in new window).",
            "Is it safe to book with a New Zealand company?", "All New Zealand companies must operate within our consumer protection laws. Please visit Consumer Affairs(opens in new window) for information on the Consumer Guarantees Act, which covers a consumer’s rights after purchase.",
            "If you have concerns before booking you can ask what customer protection insurance a business has in place.", "Many tourism companies are Qualmark(opens in new window) licensed.  Qualmark is the New Zealand tourism industry's main quality assurance system. Look for companies that are Qualmark licensed as a mark of quality business practises.",
            "Do I need to book ahead?", "Our peak season runs from October through to April, centred on summer December to February. During this full period it is strongly recommended that you book any tours, events, accommodation and transport ahead of time to ensure availability. Outside of these months there is a less of a need to book in advance, except in ski resort towns such as Queenstown and Wanaka.",
            "Travel Agent/ Finding tourism collateral", "Tourism New Zealand has a dedicated Trade website(opens in new window) that’s specially designed for travel agents.  You may wish to apply for images for New Zealand webpage or brochure design from our Visuals library(opens in new window). There is an application process as copyright remains with photographers.",
            "Walking & Hiking in New Zealand", "New Zealand is a walking and hiking paradise, and is home to many impressive single and multi-day walks for all abilities. Guides and packages are available, or it is possible to walk independently.  It is recommended that you book ahead if trekking on any of our Great Walks. Find out more about walking and hiking in New Zealand.",

        ],

    }, {
        heading: "Transport",
        text: ["Rail", "There are three long distance train routes in New Zealand, and a handful of shorter scenic rail experiences. You can find more information about travelling by rail here."
            , "Buses and coaches", "New Zealand has daily scheduled passenger bus services available throughout the country. There are also backpacker coach networks and many other coach companies serving the major tourist routes. Find out more about bus & coach transport here.", "Passes", "There are passes that cover the national Intercity(opens in new window) coach network, the three scenic rail journeys and combine rail and Cook Strait ferry passage.",
            "Cook Strait Ferries", "Bluebridge (opens in new window)and Interislander(opens in new window) operate Cook Strait ferry services between Wellington in the North Island and Picton in the South Island.  We recommend that you pre book if travelling with a car or campervan.  Some rental car companies offer vehicle swap between these places."
        ]
    }
]
const list = ["Visas, Working in New Zealand and Migration", "Custom and Quarantine Requirements", "General itinerary planning and finding a tour", "Transport", "Weather", "Connect with us", "Research Queries"]
export default function FAQTextSection() {
    return (
        <div>
            <div className='setCenter'>
                <div className="w-[70%] md:w-[45%] lg:w-[40%] xl:w-[37%] 2xl:w-[27%]">
                <div className="ml-0 md:-ml-[40%] lg:-ml-[50%] ">
                <div className='my-14'>
                        <p>This page provides answers to common questions from travelers to New Zealand.</p>
                        {list.map((list, index) => (
                            <ul key={index} className='inline '>
                                <li className='text-green-700 p-3 cursor-pointer underline'>
                                    - {list}
                                </li>
                            </ul>
                        ))}
                        </div> 
                        <DynamicInformationText content={text} />
                    </div>
                </div>
            </div>
        </div>
    )
}
