import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AppLayout from "./pages/AppLayout"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Account from "./pages/Account"
import Item from "./components/Item"
import ItemDetails from './components/ItemDetails'
import CreateItem from "./pages/CreateItem"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item" element={<Item />} />
          <Route path="/itemdetails" element={<ItemDetails />} />
          <Route path="/user/:id" element={<Account />} />
          <Route path="/createItem" element={<CreateItem />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;