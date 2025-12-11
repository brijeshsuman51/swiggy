import { Link } from "react-router";

function Footer() {
    return (
        <footer className="bg-black text-white font-serif">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40 mb-8">
                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#ff5200]">COMPANY</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/corporate" className="hover:text-[#ff5200] transition-colors">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/partner" className="hover:text-[#ff5200] transition-colors">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    MealStuff Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Bug Bounty
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    MealStuff One
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    MealStuff Corporate
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    MealStuff Instamart
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#ff5200]">CONTACT</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Help & Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Partner with us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Ride with us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#ff5200]">LEGAL</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Refund & Cancellation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Offer Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Phishing & Fraud
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#ff5200]">WE DELIVER TO</h3>
                        <ul className="space-y-2 text-sm mb-6">
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Bangalore
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Delhi
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Mumbai
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Kolkata
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Hyderabad
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Chennai
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    Pune
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-[#ff5200] transition-colors">
                                    And 500+ cities
                                </a>
                            </li>
                        </ul>
                        <Link to="/getapp" className="inline-flex items-center">
                            <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.41-.62-2.72-1.2-3.84-2.33C2.92 15.25 1.05 12.87 3 8.14c.24-.5.46-1 .71-1.44.78-1.39 1.94-2.28 3.43-2.32 1.08-.03 2.2.39 3.2.39 1 0 2.01-.41 3.28-.39 1.56.02 2.96.99 3.76 2.47-3.25 1.88-2.72 5.6.56 6.97-.48 1.15-1.04 2.3-1.68 3.45-.8 1.43-1.64 2.88-2.81 3.96zm-2.03-18.3c.55-.66 1.12-1.57 1-2.48-.97.04-2.15.65-2.85 1.47-.63.72-1.18 1.88-1.03 2.99 1.08.08 2.19-.53 2.88-1.98z"/>
                                </svg>
                                <span className="font-bold">Get the App</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            
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
                            <span className="text-sm text-gray-400">© 2025 MealStuff</span>
                        </div>
                        
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[#ff5200] transition-colors" aria-label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-[#ff5200] transition-colors" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-[#ff5200] transition-colors" aria-label="Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-[#ff5200] transition-colors" aria-label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

