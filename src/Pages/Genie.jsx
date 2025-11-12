import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Genie() {
    return (
        <>
            <Header></Header>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Swiggy Genie
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get anything delivered to your doorstep. From groceries to documents, we've got you covered.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-xl font-bold mb-2">Package Delivery</h3>
                            <p className="text-gray-600">
                                Send packages, documents, and parcels across the city with ease.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-4xl mb-4">🛒</div>
                            <h3 className="text-xl font-bold mb-2">Shopping Assistance</h3>
                            <p className="text-gray-600">
                                Need something from the store? Our Genie will get it for you.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-2">Quick Delivery</h3>
                            <p className="text-gray-600">
                                Fast and reliable delivery service available 24/7.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <button className="bg-[#ff5200] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#e64900] transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Genie;

