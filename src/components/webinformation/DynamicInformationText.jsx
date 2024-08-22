import React from 'react'

export default function 
DynamicInformationText({ content }) {
    return (
        <div >
        {content.map((data, index) => (
            <div key={index} className='my-14'>
                <h1 className='text-3xl font-bold my-6'>{data.heading}</h1>
                {data.text.map((txt, index) => (
                    <div key={index}>
                        <p className='text-base my-6'>{txt}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
    )
}
