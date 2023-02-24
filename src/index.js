import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Cart.css";
import "./login.css"
import "./register.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartShop from "./component/CartShop";
import Login from "./component/Login";
import Registration from "./component/Registration";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cartshop" element={<CartShop />} />
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
