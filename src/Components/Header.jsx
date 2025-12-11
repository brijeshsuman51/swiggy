import { useState } from 'react';
import { Link } from "react-router"; 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#ff5200] font-serif text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                            
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110"
                            >
                            <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                            <path fillRule="evenodd" d="M3.019 11.114A6.09 6.09 0 002 15.25v2.5a.75.75 0 00.75.75h18.5a.75.75 0 00.75-.75v-2.5a6.09 6.09 0 00-1.019-4.136L3.019 11.114zM6 20.25a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" />
                            </svg>
                            
                            
                            <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
                                MealStuff
                            </span>
                        </Link>
                    </div>
                    
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-bold">
                        <Link to="/corporate" className="hover:opacity-80 transition-opacity">MealStuff Corporate</Link>
                        <Link to="/partner" className="hover:opacity-80 transition-opacity">Partner with us</Link>
                        <Link to="/getapp" className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors">Get the App</Link>
                        <Link to="/login" className="border border-black bg-black px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">Sign in</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Dropdown) */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 space-y-4">
                        <Link to="/corporate" className="block text-center font-bold">MealStuff Corporate</Link>
                        <Link to="/partner" className="block text-center font-bold">Partner with us</Link>
                        <Link to="/getapp" className="block text-center border border-white mx-auto w-fit px-4 py-2 rounded-lg">Get the App</Link>
                        <Link to="/login" className="block text-center border border-black bg-black mx-auto w-fit px-4 py-2 rounded-lg">Sign in</Link>
                    </div>
                )}
            </div>

            {/* Hero Section */}
            <div className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
                {/* Decorative background images */}
                <img className="hidden md:block h-auto w-48 lg:w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="hidden md:block h-auto w-48 lg:w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Order Food and groceries. Discover best restaurants. MealStuff it!
                    </h1>
                    
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 mt-8">
                        <input className="text-base w-full md:w-[40%] rounded-lg bg-white text-black px-4 py-3 focus:outline-none" placeholder="Enter your location"></input>
                        <input className="text-base w-full md:w-[60%] rounded-lg bg-white text-black px-4 py-3 focus:outline-none" placeholder="Search for restaurants, food, or groceries"></input>
                    </div>
                </div>
            </div>

            {/* Category Links Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-nowrap overflow-x-auto gap-4 scrollbar-hide pb-4">
                    <Link to="/restaurants" className="flex-none">
                        <img className='w-full h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="Order Food"/>
                    </Link>
                    <Link to="/instamart" className="flex-none">
                        <img className='w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png" alt="Instamart"/>
                    </Link>
                    <Link to="/dineout" className="flex-none">
                        <img className='w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="Dineout"/>
                    </Link>
                    <Link to="/genie" className="flex-none">
                        <img className='w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="Genie"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;