import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShopCart from "./ShopCart";

const CartShop = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            GIỎ HÀNG
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {state.length} Sản phẩm
                          </MDBTypography>
                        </div>
                        <hr className="my-4" />
                        <ShopCart />
                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <NavLink to="/products" className="back-product">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                              Trở lại trang sản phẩm
                            </NavLink>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Chi tiết đơn hàng
                        </MDBTypography>
                        <hr className="my-4" />
                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Đơn vị giao hàng
                        </MDBTypography>
                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">Giao hàng nhanh</option>
                            <option value="2">
                              Giao hàng tiết kiệm
                            </option>
                            <option value="3">
                              {" "}
                              Chuyển Phát Nhanh J&T Express
                            </option>
                          </select>
                        </div>
                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Mã giảm giá
                        </MDBTypography>
                        <div className="mb-5">
                          <MDBInput size="lg" label="Nhập mã giảm giá" />
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            Money
                          </MDBTypography>
                        </div>
                        <button type="button" class="btn btn-dark">Thanh toán</button>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default CartShop;
