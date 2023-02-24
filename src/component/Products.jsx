import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import '../App.css';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3000/fakeAPI");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-4 pb-4">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Nike")}
          >
            Nike
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Adidas")}
          >
            Adidas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("MLB")}
          >
            MLB
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("New Blance")}
          >
            New Balance
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4">
                <NavLink to={`/products/${product.id}`} className="decoration-none">
                  <img 
                    src={product.image}
                    className="card-image card-img-top"
                    alt={product.title}
                    height="200px"
                  />
                  </NavLink>
                  <div className="card-body">
                  <NavLink to={`/products/${product.id}`} className="decoration-none">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 15)}...
                    </h5>
                    </NavLink>
                    <p className="card-text lead fw-bold">{product.price}₫</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Mua ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">SẢN PHẨM MỚI NHẤT</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
