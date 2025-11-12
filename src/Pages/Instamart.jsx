import Header from "../Components/Header";
import GroceryOption from "../Components/GroceryOption";
import Footer from "../Components/Footer";
import CheckoutHeader from "../Components/CheckoutHeader";

function Instamart() {
    return (
        <>
            {/* <Header></Header> */}
            <CheckoutHeader></CheckoutHeader>
            <GroceryOption></GroceryOption>
            <GroceryOption></GroceryOption>
            <GroceryOption></GroceryOption>
            <Footer></Footer>
        </>
    );
}

export default Instamart;

