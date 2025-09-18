import { useState } from 'react';
import { Link } from "react-router";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#ff5200] font-serif text-white">
            {/* Top Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" className="h-10" alt="Swiggy Logo" />
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-bold">
                        <a href="https://www.swiggy.com/corporate/" target="_blank" className="hover:opacity-80 transition-opacity">Swiggy Corporate</a>
                        <a target="_blank" href="https://partner.swiggy.com/login#/swiggy" className="hover:opacity-80 transition-opacity">Partner with us</a>
                        <a className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors" target="_blank" href="">Get the App</a>
                        <a className="border border-black bg-black px-4 py-2 rounded-lg hover:opacity-80 transition-opacity" target="_blank" href="">Sign in</a>
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
                        <a href="https://www.swiggy.com/corporate/" target="_blank" className="block text-center font-bold">Swiggy Corporate</a>
                        <a target="_blank" href="https://partner.swiggy.com/login#/swiggy" className="block text-center font-bold">Partner with us</a>
                        <a className="block text-center border border-white mx-auto w-fit px-4 py-2 rounded-lg" target="_blank" href="">Get the App</a>
                        <a className="block text-center border border-black bg-black mx-auto w-fit px-4 py-2 rounded-lg" target="_blank" href="">Sign in</a>
                    </div>
                )}
            </div>

            {/* Hero Section */}
            <div className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
                {/* Decorative background images hidden on mobile */}
                <img className="hidden md:block h-auto w-48 lg:w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="hidden md:block h-auto w-48 lg:w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Order Food and groceries. Discover best restaurants. Swiggy it!
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
                        <img className=' w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="Order Food"/>
                    </Link>
                    <a href="https://www.swiggy.com/instamart" className="flex-none">
                        <img className=' w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png" alt="Instamart"/>
                    </a>
                    <a href="https://www.swiggy.com/dineout" className="flex-none">
                        <img className=' w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="Dineout"/>
                    </a>
                    <a href="https://www.swiggy.com/genie" className="flex-none">
                        <img className=' w-100 h-70' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="Genie"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;