import DynamicInformationText from "./DynamicInformationText";
import SiteFeedBackForm from "./SiteFeedBackForm";

const data =[
    {
        heading:"Let us know your feedback",
        text:["Tourism New Zealand is committed to providing the best possible experience on newzealand.com and welcomes all feedback on this site. Please let us know what you like, don’t like and any problems you may be experiencing"
        ]
    },
    {
        heading:"Travel Questions",
        text:["Please do not submit any travel planning questions as we are unable to respond to these.",
            "For any questions you may have check out our helpful FAQs, contact a travel agent in your home country or talk to a travel expert from isite, New Zealand’s official visitor information network.(opens in new window)"
        ]
    }, {
        heading:"Visa or Immigration",
        text:["For Visa or Immigration queries see the Visas, working in New Zealand and migration section of our FAQs."
        ]
    }, {
        heading:"Air New Zealand",
        text:["If your query is for Air New Zealand please email or phone Air New Zealand."
        ]
    }, {
        heading:"Website Changes",
        text:["Sign In and Sign Up will be removed from 31 October 2018. You will no longer be able to sign in to this website after this date."
        ]
    }, {
        heading:"All other feedback",
        text:["If above doesn’t apply, please provide your feedback to us below. This form captures data in accordance with our Privacy Policy. Your personal information is only used to send us your feedback about this website."
        ]
    },
]
export default function SiteFeedback() {
  return (
    <div>
      <DynamicInformationText content={data}/>
      <SiteFeedBackForm/>
    </div>
  )
}
