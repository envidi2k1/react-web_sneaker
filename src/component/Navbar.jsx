import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div className="wrap-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
            <img src="./assets/logo.png" alt="logo" height="50px"/>
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            ENVIDI SHOP
          </NavLink>
            <img className="mg-l" src="./assets/logo1.png" alt="logo" height="40px"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Sản phẩm
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Giới thiệu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
                <div className="buttons">
                <   NavLink to="/login" className="btn btn-outline-dark">
                        <i className="fa fa-user-circle-o me-1"></i> Đăng nhập </NavLink>
                    <NavLink to="/cartshop" className="btn btn-outline-dark ms-2"> 
                        <i className="fa fa-shopping-cart me-1"></i> Giỏ hàng ({state.length}) </NavLink>
                </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
