import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                {/* <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span> */}
                {/* <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#13a4d8]'>Dream Jobs</span></h1> */}
                <h1 className='text-5xl font-bold'>Unlock Your Next Opportunity
                     {/* <br /> Get Your <span className='text-[#13a4d8]'>Dream Jobs</span> */}
                     </h1>
                <p>Browse thousands of opportunities from top companies. Whether you're seeking your first job or the next step in your career, we help you find the perfect match.</p>
                <p>Your career journey starts here. Explore curated job listings, apply with ease, and land your dream role in just a few clicks.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#0a8cd8]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection