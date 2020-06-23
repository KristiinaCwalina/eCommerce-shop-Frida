import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function AllProducts (){
    return <div>   <section className="new-products">
    <div className="container">
      <div className="title-box">
        <h2>All Products</h2>
      </div>
      <div className="row">
        {data.products.map((product) => (
          <div className="col-md-3">
            <div className="product-top">
              <Link to={"/products/" + product.id}>
                <img src={product.image} />
              </Link>
              <div className="overlay-right">
                <button
                  type="button"
                  className="btn btn-secondary"
                  title="Quick Shop"
                >
                  <i className="fa fa-eye"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  title="Add to Wishlist"
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
              <h3>{product.name}</h3>
              <h5>${product.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section></div>
}

export default AllProducts;