import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router";

export default function CheckoutHeader() {
    const counter = useSelector(state => state?.Cartslice?.count || 0, shallowEqual);

    return (
        // Responsive container
        <div className="w-full bg-gray-200">
            <div className="container max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                
                {/* Logo Link */}
                <div>
                    <Link to='/'>
                        <button className="text-orange-600 font-bold text-3xl sm:text-4xl transition-opacity duration-200 hover:opacity-80">
                            MealStuff
                        </button>
                    </Link>
                </div>

                {/* Cart Link */}
                <div>
                    <Link
                        to="/Checkout"
                        className="text-gray-800 text-lg sm:text-xl font-medium transition-colors duration-200 hover:text-orange-600"
                        aria-label={`View your cart, ${counter} items`}
                    >
                        <span className="flex items-center gap-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                                />
                            </svg>
                            Cart ({counter})
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}