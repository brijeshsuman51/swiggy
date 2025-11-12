import { useState } from 'react';
import { Link } from 'react-router';

function Partner() {
    const [formData, setFormData] = useState({
        restaurantName: '',
        ownerName: '',
        email: '',
        phone: '',
        city: '',
        cuisine: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Partner Registration:', formData);
        alert('Thank you for your interest! Our team will contact you soon.');
    };

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

                {/* Partner Content */}
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mt-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
                            Partner with Swiggy
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Grow your restaurant business with India's largest food delivery platform
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="text-center">
                                <div className="text-5xl mb-4">📈</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Increase Revenue</h3>
                                <p className="text-gray-600 text-sm">Reach millions of customers</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl mb-4">🚀</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Quick Setup</h3>
                                <p className="text-gray-600 text-sm">Get started in minutes</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl mb-4">💡</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Marketing Support</h3>
                                <p className="text-gray-600 text-sm">Boost your visibility</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Restaurant Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="restaurantName"
                                        name="restaurantName"
                                        value={formData.restaurantName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5200] focus:border-transparent text-gray-800"
                                        placeholder="Enter restaurant name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Owner Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="ownerName"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5200] focus:border-transparent text-gray-800"
                                        placeholder="Enter owner name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5200] focus:border-transparent text-gray-800"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5200] focus:border-transparent text-gray-800"
                                        placeholder="Enter phone number"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                        City *
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5200] focus:border-transparent text-gray-800"
                                        placeholder="Enter city"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-2">
                                        Cuisine Type *
                                    </label>
                                    <select
                                        id="cuisine"
                                        name="cuisine"
                                        value={formData.cuisine}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5200] focus:border-transparent text-gray-800"
                                        required
                                    >
                                        <option value="">Select cuisine type</option>
                                        <option value="indian">Indian</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="italian">Italian</option>
                                        <option value="mexican">Mexican</option>
                                        <option value="thai">Thai</option>
                                        <option value="continental">Continental</option>
                                        <option value="fast-food">Fast Food</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="desserts">Desserts</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#ff5200] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#e64900] transition-colors duration-200"
                            >
                                Submit Partnership Request
                            </button>
                        </form>

                        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Why Partner with Swiggy?</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-[#ff5200] mr-2">✓</span>
                                    <span>Zero commission for the first month</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ff5200] mr-2">✓</span>
                                    <span>Free marketing and promotional support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ff5200] mr-2">✓</span>
                                    <span>Real-time order tracking and management</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ff5200] mr-2">✓</span>
                                    <span>Dedicated partner support team</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;

