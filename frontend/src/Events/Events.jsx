import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'
import EventCard from './EventCard'

const Events = () => {
   const [search, setSearch] = useState("");
    const [EventType, setEventType] = useState("All");

    return (
        <div>
            <Navbar />
            <div className='mt-30'>

                <form className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">

                    {/* <!-- Search Bar Left --> */}
                    <div className="flex w-full md:w-auto ml-10">
                        <input type="text"
                            placeholder="Search for the tool you like"
                            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-black-500 focus:outline-none focus:border-sky-500" value={search}
                            onChange={(e) => setSearch(e.target.value)}/>

                        <button type="submit"
                            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">
                            Search
                        </button>
                    </div>

                    {/* <!-- Filter Right --> */}
                    <select id="pricingType" name="pricingType"
                        className="w-full md:w-auto h-10 border-2 border-black-500 focus:outline-none focus:border-sky-500 text-black-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider mr-10"  value={EventType}
                        onChange={(e) => setEventType(e.target.value)}>
                        <option value="All" selected>All</option>
                        <option value="Freemium">OnGoing</option>
                        <option value="Free">UpComing</option>
                        <option value="Paid">Past</option>
                    </select>
                </form>
            <EventCard search={search} EventType={EventType} />
            </div>

        </div>
    )
}

export default Events