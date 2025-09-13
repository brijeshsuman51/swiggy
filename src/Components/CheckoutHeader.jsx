import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router";


export default function CheckoutHeader(){
    
    const counter = useSelector(state=>state?.Cartslice?.count || 0 , shallowEqual)

    return(
        <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
            <div>
                <Link to='/'>
                <button className="text-orange-600 font-bold">Swiggy</button>
                </Link>
            </div>
            <div>
                <Link to="/Checkout">
                <p>Cart {`${counter}`}</p>
                </Link>
            </div>
        </div>
    )

}