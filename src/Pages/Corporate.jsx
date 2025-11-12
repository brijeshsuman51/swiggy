import { Link } from 'react-router';

function Corporate() {
    return (
        <div className="min-h-screen bg-[#ff5200] font-serif">
            {/* Header with Logo */}
            <header className="bg-[#ff5200] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex-shrink-0">
                            <img 
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" 
                                className="h-10" 
                                alt="Swiggy Logo" 
                            />
                        </Link>
                        <Link 
                            to="/login" 
                            className="border border-black bg-black px-4 py-2 rounded-lg hover:opacity-80 transition-opacity font-bold text-sm"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden min-h-[calc(100vh-80px)]">
                {/* Decorative background images */}
                <img 
                    className="hidden md:block h-auto w-48 lg:w-60 absolute top-0 left-0 opacity-50" 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" 
                    alt="" 
                />
                <img 
                    className="hidden md:block h-auto w-48 lg:w-60 absolute top-0 right-0 opacity-50" 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" 
                    alt="" 
                />

                {/* Corporate Content */}
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mt-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
                            Swiggy Corporate
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Empowering businesses with food delivery solutions
                        </p>

                        <div className="space-y-8 mt-10">
                            <div className="border-l-4 border-[#ff5200] pl-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">About Swiggy Corporate</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Swiggy Corporate offers comprehensive food delivery solutions for businesses of all sizes. 
                                    Whether you're looking to provide meals for your employees, manage corporate catering, 
                                    or streamline your food ordering process, we have the perfect solution for you.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="text-4xl mb-4">🍽️</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Employee Meals</h3>
                                    <p className="text-gray-600">
                                        Provide your employees with delicious meals from top restaurants. 
                                        Easy ordering, flexible payment options, and seamless delivery.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="text-4xl mb-4">🏢</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Corporate Catering</h3>
                                    <p className="text-gray-600">
                                        Plan and execute corporate events, meetings, and celebrations 
                                        with our professional catering services.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="text-4xl mb-4">💼</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Bulk Orders</h3>
                                    <p className="text-gray-600">
                                        Order in bulk for your team with special corporate pricing 
                                        and dedicated account management.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="text-4xl mb-4">📊</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics & Reports</h3>
                                    <p className="text-gray-600">
                                        Track your food expenses, manage budgets, and get detailed 
                                        reports for better financial planning.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 bg-[#ff5200] rounded-lg p-8 text-white text-center">
                                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                                <p className="mb-6 text-lg">
                                    Contact our corporate team to learn more about our services and pricing.
                                </p>
                                <button className="bg-white text-[#ff5200] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
                                    Contact Sales Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Corporate;

