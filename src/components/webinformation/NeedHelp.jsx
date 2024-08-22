import React from 'react'
import DynamicInformationText from './DynamicInformationText'

const content =[
    {
        heading:"",
        text:["While visitors are in New Zealand, they are covered by New Zealand's consumer protection(opens in new window) laws which require all businesses to treat consumers fairly",
            "We are always concerned to hear about any negative experiences that our visitors may have; however, Tourism New Zealand is a marketing agency and has no legal jurisdiction to intervene in these matters. If you have a complaint, you need to resolve this matter directly with the operator.",
            "The Ministry of Consumer Protection website provides details about complaining effectively, or alternatively these links below may be of some assistance."
        ]
    },
    {
        heading:"New Zealand travel and experiences ",
        text:["If you want to know more about travel in New Zealand and the experiences on offer, head to our homepage(opens in new window) and explore.",
            "If you would like to speak to someone in person about this, please call the isite visitor information network on 0800 474 830.",
        ]
    },
    {
        heading:"VISA enquiries ",
        text:["For information about visa requirements for visiting New Zealand, visit immigration.govt.nz(opens in new window) or call +64-9-914-4100",
        ]
    },
    {
        heading:"Accommodation",
        text:["alk to the accommodation provider first. If the provider is a member of an association (generally they will have these links displayed on their website), you can further your complaint with the association.",
        ]
    },
    {
        heading:"Air NZ",
        text:["Whilst TNZ works closely with Air New Zealand, we are two separate entities. For all complaints, ticket changes, lost property and other enquiries, you need to contact Air New Zealand(opens in new window).",
        ]
    },{
        heading:"Police",
        text:["If you wish to make a complaint about the Police (for example speeding fines or Police treatment), you can do so by submitting an expression of dissatisfaction form(opens in new window) with the New Zealand Police online.",
        ]
    },{
        heading:"Payment disputes",
        text:["Your financial institution (credit card company, bank or China Union Pay) may be able to help dispute charges on your behalf.",
        ]
    },{
        heading:"Rental Cars",
        text:["Read the tips for resolving rental car problems(opens in new window) on the NZ Consumer Protection website.",
        ]
    },{
        heading:"Qualmark (New Zealand’s national quality and environmental accreditation system)",
        text:["We recommend choosing Qualmark(opens in new window)-approved accommodation, transport and activities. If you have a complaint about a Qualmark accredited business, you can place your feedback directly with Qualmark by emailing enquiries@qualmark.co.nz. Any issues raised will be recorded and forwarded to the business concerned.",
        ]
    },{
        heading:"Website problems",
        text:["Any problems with the website should be reported through the Site Feedback page.",
        ]
    },
    



]
export default function NeedHelp() {
  return (
    <div>
      <DynamicInformationText content={content}/>
    </div>
  )
}
