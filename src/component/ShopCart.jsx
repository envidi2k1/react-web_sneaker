import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart, clearCart } from "../redux/action";

const ShopCart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

   // Tạo state để lưu số lượng của sản phẩm
   const [quantity, setQuantity] = useState(1);

  const handleRemove = (product) => {
    dispatch(clearCart(product)); // gọi action clearCart và truyền id sản phẩm cần xoá vào payload
  };

 
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    if (quantity > 1) {
      // dispatch action trước
      dispatch(delCart(item));
      // sau đó cập nhật state quantity
      setQuantity(quantity - 1);
    }
  };
  
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Không có sản phẩm</h3>
          </div>
        </div>
      </div>
    );
  };
  const getTotalPrice = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0);
    return totalPrice;
  };

  const cartItems = (product) => {
    return (
      <>
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
          <MDBCol md="2" lg="2" xl="2">
            <MDBCardImage
              src={product.image}
              fluid
              className="rounded-3"
              alt={product.title}
            />
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3">
            <MDBTypography tag="h6" className="text-muted">
              {product.category}
            </MDBTypography>
            <MDBTypography tag="h6" className="text-black mb-0">
              {product.title}
            </MDBTypography>
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center quantity-input">
          <MDBTypography tag="h6" className="text-muted">
              <p className="product-quantity">Số lượng</p>
            </MDBTypography>
            <MDBIcon className="pd-rl" icon="minus" onClick={() => setQuantity(quantity - 1)} />
            <MDBInput type="number" min="0" value={quantity} size="sm" readOnly />
            <MDBIcon className="pd-rl" icon="plus" onClick={() => setQuantity(quantity + 1)} />
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="text-end">
          <MDBTypography tag="h6" className="text-muted">
              Giá tiền
            </MDBTypography>
            <MDBTypography tag="h6" className="mb-0">
              <p className="total-price">
              {product.qty * product.price} ₫
              </p>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="1" lg="1" xl="1" className="text-end">
            <a href="#!" className="text-muted">
              <MDBIcon icon="trash" onClick={() => handleRemove(product)}/>
            </a>
          </MDBCol>
        </MDBRow>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default ShopCart;
