import { Outlet } from "react-router";
import CheckoutHeader from "../Components/CheckoutHeader";



export default function SecondaryHome(){
    return(
        <>
        <CheckoutHeader></CheckoutHeader>
        <Outlet></Outlet>
        </>
    )
}   