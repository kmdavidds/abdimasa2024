import React, { useState } from 'react'
import events from '../../../../api/userApi/events.json'
import { FaChevronLeft, FaChevronRight, FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";

const Kalender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [selectedDate, setSelectedDate] = useState(null);

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handlePreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day) => {
        const selectedFullDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setSelectedDate(selectedFullDate);
    };

    const renderEventDetails = () => {
        if (selectedDate && events[selectedDate]) {
            const event = events[selectedDate];
            return (
                <div className="w-full flex flex-col justify-between space-y-4 sm:space-y-8 h-full">
                    <h2 className="w-full text-sm sm:text-lg font-bold text-white text-center bg-cust-blue py-2 rounded-lg">{event.title}</h2>
                    <img src={event.image} alt={event.title} className="w-full h-28 sm:h-40 object-cover rounded-lg mb-4" />
                    <div className='flex justify-between text-cust-blue font-bold py-2 text-[10px] lg:text-base'>
                        <div className='flex items-center gap-0.5 sm:gap-2'>
                            <span className='lg:text-3xl text-xl  mb-1'><FaCalendar /></span>:  {event.date}
                        </div>
                        <div className='flex items-center gap-0.5 sm:gap-2'>
                            <span className='lg:text-3xl text-xl '><FaClock /></span>:  {event.time}
                        </div>
                        <div className='flex items-center gap-0.5 sm:gap-2'>
                            <span className='lg:text-3xl text-xl '><FaLocationDot /></span>:  {event.location}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-sm sm:text-xl font-semibold mb-2">Tidak Ada Kegiatan</h2>
                </div>
            );
        }
    };

    const renderCalendarDays = () => {
        const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
        const firstDayIndex = firstDayOfMonth(currentMonth, currentYear);
        const calendarDays = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayIndex; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        // Add the actual days of the month
        for (let day = 1; day <= daysInCurrentMonth; day++) {
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const hasEvent = events[dateKey] !== undefined;
            const isSelected = selectedDate === dateKey;

            calendarDays.push(
                <button
                    key={dateKey}
                    onClick={() => handleDateClick(day)}
                    className={`size-8 text-sm sm:text-base sm:size-12 rounded-full flex flex-col items-center justify-center
                        ${isSelected ? 'bg-cust-blue text-white' : ''}  
                        ${hasEvent ? '' : ''}`}
                >
                    {day}
                    {hasEvent && (
                        <span className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full mt-0.5 ${isSelected ? 'bg-white' : 'bg-cust-blue'}`}></span>
                    )}
                </button>
            );
        }

        return calendarDays;
    };


    return (
        <div className="bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex items-center font-poppins justify-center py-28 bg-cust-blue">
            <div className='container flex flex-col items-center justify-beetween w-full min-h-full xl:min-h-screen gap-16'>
                <div className='w-full flex justify-center md:justify-between md:px-0 px-8'>
                    <img src="/images/Landing/KalenderSection/kalenderTitle.svg" alt="" className='w-max' />
                    <img src="/images/Landing/KalenderSection/icon.svg" alt="" className='w-max hidden md:block' />
                </div>
                <div className='w-full flex flex-col md:flex-row gap-9 sm:gap-24 lg:min-h-[410px] px-10 md:px-0'>
                    <div className='lg:w-2/5 md:1/2 w-full bg-gradient-to-b from-[#E2F0FF] via-[#F0F7FF] to-[#F2F8FF] rounded-xl p-5'>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xs sm:text-lg px-4 py-2 font-bold bg-cust-blue rounded-full text-white">{monthNames[currentMonth]} {currentYear}</h3>
                            <div className='flex gap-5'>
                                <button onClick={handlePreviousMonth} className="text-xs sm:text-xl font-bold text-white bg-cust-blue rounded-full p-2 sm:p-3"><FaChevronLeft /></button>
                                <button onClick={handleNextMonth} className="text-xs sm:text-xl font-bold text-white bg-cust-blue rounded-full p-2 sm:p-3"><FaChevronRight /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm sm:text-base font-bold">
                            {daysOfWeek.map((day) => (
                                <div key={day}>{day}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 mt-2">
                            {renderCalendarDays()}
                        </div>
                    </div>
                    <div className='lg:w-3/5 md:1/2 w-full bg-gradient-to-b from-[#E2F0FF] via-[#F0F7FF] to-[#F2F8FF] rounded-xl py-5 px-4 sm:px-10'>
                        {renderEventDetails()}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Kalender
