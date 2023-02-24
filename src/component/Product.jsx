import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import {
  TransformWrapper,
  TransformComponent
} from "react-zoom-pan-pinch";
import Products from "./Products";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/fakeAPI/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const handleClick = (event) => {
    event.currentTarget.classList
      .toggle("size-active")
      .siblings()
      .remove("size-active");
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <TransformWrapper>
            <TransformComponent>
              <img
                className="card-img--product"
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </TransformComponent>
          </TransformWrapper>
          <p className="Pick text-uppercase mt-5"> Chọn Size: </p>
          <div className="product-size">
            <span className="size-item" onClick={handleClick}>
              38
            </span>
            <span className="size-item" onClick={handleClick}>
              39
            </span>
            <span className="size-item" onClick={handleClick}>
              40
            </span>
            <span className="size-item" onClick={handleClick}>
              41
            </span>
            <span className="size-item" onClick={handleClick}>
              42
            </span>
            <span className="size-item" onClick={handleClick}>
              43
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Đánh giá: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">{product.price} ₫</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Thêm vào giỏ hàng
          </button>
          <button class="btn btn-dark ms-2 px-3 py-2">
            <span>♥</span>
          </button>
        </div>
        <Products/>
      </>
    );
};
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
