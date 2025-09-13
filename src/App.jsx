import { Route,Routes } from "react-router";
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";
import SecondaryHome from "./utils/SecondaryHome";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import Checkout from "./Pages/Checkout";

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
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