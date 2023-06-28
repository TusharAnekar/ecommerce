import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { Cart } from "./pages/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
