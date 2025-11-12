import { Link } from 'react-router';

function GetApp() {
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

                {/* Get App Content */}
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mt-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
                            Get the Swiggy App
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-12">
                            Order food, groceries, and more on the go!
                        </p>

                        {/* App Download Section */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Android */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
                                <div className="text-6xl mb-4">🤖</div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Android App</h2>
                                <p className="text-gray-600 mb-6">
                                    Download the Swiggy app for Android and enjoy seamless food ordering experience.
                                </p>
                                <div className="space-y-3">
                                    <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.41-.62-2.72-1.2-3.84-2.33C2.92 15.25 1.05 12.87 3 8.14c.24-.5.46-1 .71-1.44.78-1.39 1.94-2.28 3.43-2.32 1.08-.03 2.2.39 3.2.39 1 0 2.01-.41 3.28-.39 1.56.02 2.96.99 3.76 2.47-3.25 1.88-2.72 5.6.56 6.97-.48 1.15-1.04 2.3-1.68 3.45-.8 1.43-1.64 2.88-2.81 3.96zm-2.03-18.3c.55-.66 1.12-1.57 1-2.48-.97.04-2.15.65-2.85 1.47-.63.72-1.18 1.88-1.03 2.99 1.08.08 2.19-.53 2.88-1.98z"/>
                                        </svg>
                                        Download for Android
                                    </button>
                                    <p className="text-sm text-gray-500">Requires Android 5.0 or higher</p>
                                </div>
                            </div>

                            {/* iOS */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                                <div className="text-6xl mb-4">🍎</div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">iOS App</h2>
                                <p className="text-gray-600 mb-6">
                                    Download the Swiggy app for iPhone and iPad. Available on the App Store.
                                </p>
                                <div className="space-y-3">
                                    <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.41-.62-2.72-1.2-3.84-2.33C2.92 15.25 1.05 12.87 3 8.14c.24-.5.46-1 .71-1.44.78-1.39 1.94-2.28 3.43-2.32 1.08-.03 2.2.39 3.2.39 1 0 2.01-.41 3.28-.39 1.56.02 2.96.99 3.76 2.47-3.25 1.88-2.72 5.6.56 6.97-.48 1.15-1.04 2.3-1.68 3.45-.8 1.43-1.64 2.88-2.81 3.96zm-2.03-18.3c.55-.66 1.12-1.57 1-2.48-.97.04-2.15.65-2.85 1.47-.63.72-1.18 1.88-1.03 2.99 1.08.08 2.19-.53 2.88-1.98z"/>
                                        </svg>
                                        Download for iOS
                                    </button>
                                    <p className="text-sm text-gray-500">Requires iOS 12.0 or higher</p>
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Fast Delivery</h3>
                                <p className="text-gray-600 text-sm">Get your food delivered in minutes</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl mb-4">🎁</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Exclusive Offers</h3>
                                <p className="text-gray-600 text-sm">App-only deals and discounts</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl mb-4">📍</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Track Orders</h3>
                                <p className="text-gray-600 text-sm">Real-time order tracking</p>
                            </div>
                        </div>

                        {/* QR Code Section */}
                        <div className="bg-[#ff5200] rounded-lg p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Scan to Download</h3>
                            <p className="mb-6 text-lg">
                                Scan the QR code with your phone camera to download the app
                            </p>
                            <div className="bg-white p-6 rounded-lg inline-block mb-4">
                                <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">QR Code Placeholder</span>
                                </div>
                            </div>
                            <p className="text-sm opacity-90">
                                Point your camera at the QR code above
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetApp;

