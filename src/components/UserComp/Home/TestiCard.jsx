import React from 'react'

const TestiCard = ({ image, quote, name, occupation }) => {
    return (
        <div className="bg-gradient-to-b text-[#252525] from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF]  rounded-xl shadow-xl max-w-[160px] sm:max-w-[360px] px-3 sm:px-6 py-4 sm:py-8 space-y-3 sm:space-y-8 flex flex-col justify-between">
            <div className="flex w-full justify-between items-center">
                <img src={image} alt={name} className="w-7 sm:w-16 h-7 sm:h-16 rounded-full" />
                <img src="/images/Landing/KataMerekaSection/hiasan.svg" alt="hiasan" className='sm:w-max w-8 sm:h-max '/>
            </div>
            <p className="text-justify sm:text-base text-[8px]">“{quote}”</p>
            <div className="flex flex-col">
                <h3 className="font-bold text-[8px] sm:text-lg">{name}</h3>
                <p className="text-[6px] sm:text-xs text-cust-blue">{occupation}</p>
            </div>
        </div>
    )
}

export default TestiCard
