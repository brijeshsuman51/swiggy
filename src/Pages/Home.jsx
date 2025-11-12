import FoodOption from "../Components/FoodOption"
import Header from "../Components/Header"
import GroceryOption from "../Components/GroceryOption"
import DineOption from "../Components/DineOption"
import Footer from "../Components/Footer"


function Home(){
    return(
        <>
    <Header></Header>
    <FoodOption></FoodOption>
    <GroceryOption></GroceryOption>
    <DineOption></DineOption>
    <Footer></Footer>
    </>
    )
}

export default Home