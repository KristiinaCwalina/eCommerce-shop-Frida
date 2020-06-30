import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function AllProducts(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      {" "}
      <section className="new-products">
        <div className="container">
          <div className="title-box">
            <h2>All Products</h2>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3">
                <div className="product-top">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.image} />
                  </Link>
                  <div className="overlay-right">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      title="See Item"
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      title="Like"
                    >
                      <i className="fa fa-heart-o"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      title="Add to Cart"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <h3>{product.product_name}</h3>
                  <h5>${product.unit_price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllProducts;
