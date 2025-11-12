import { Route,Routes } from "react-router";
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";
import SecondaryHome from "./utils/SecondaryHome";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Corporate from "./Pages/Corporate";
import Partner from "./Pages/Partner";
import GetApp from "./Pages/GetApp";
import Instamart from "./Pages/Instamart";
import Dineout from "./Pages/Dineout";
import Genie from "./Pages/Genie";
import FoodCategory from "./Pages/FoodCategory";
import GroceryCategory from "./Pages/GroceryCategory";
import DineCategory from "./Pages/DineCategory";

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/corporate" element={<Corporate></Corporate>}></Route>
      <Route path="/partner" element={<Partner></Partner>}></Route>
      <Route path="/getapp" element={<GetApp></GetApp>}></Route>
      <Route path="/instamart" element={<Instamart></Instamart>}></Route>
      <Route path="/dineout" element={<Dineout></Dineout>}></Route>
      <Route path="/genie" element={<Genie></Genie>}></Route>
      <Route path="/food/:categoryId" element={<FoodCategory></FoodCategory>}></Route>
      <Route path="/grocery/:categoryId" element={<GroceryCategory></GroceryCategory>}></Route>
      <Route path="/dine/:categoryId" element={<DineCategory></DineCategory>}></Route>
      <Route element={<SecondaryHome></SecondaryHome>}>
      <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
      <Route path="/city/kota/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
      <Route path="/city/kota/:id/search" element={<SearchFood></SearchFood>}></Route>
      </Route>
      <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
    </Routes>
    </>
  )
}

export default App;