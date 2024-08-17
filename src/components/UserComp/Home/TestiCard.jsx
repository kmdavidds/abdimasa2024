import React from 'react'

const TestiCard = ({ image, quote, name, occupation }) => {
    return (
        <div className="bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF]  rounded-xl shadow-lg max-w-[360px] px-6 py-8 space-y-8 flex flex-col justify-between">
            <div className="flex w-full justify-between">
                <img src={image} alt={name} className="w-16 h-16 rounded-full" />
                <img src="/images/Landing/KataMerekaSection/hiasan.svg" alt="hiasan" />
            </div>
            <p className=" text-[#252525] text-justify">“{quote}”</p>
            <div className="flex flex-col">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-xs text-cust-blue">{occupation}</p>
            </div>
        </div>
    )
}

export default TestiCard
