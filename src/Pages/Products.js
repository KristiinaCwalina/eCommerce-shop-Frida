import React from "react";
import data from "../data";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import SaleItems from "../Components/SaleItems";

function Products(props) {
  const productId = +props.match.params.id;

  const product = data.products.find((p) => p.id === productId);

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <section className="single-product">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src={product.image} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <p className="price">$ {product.price}</p>
            <p className="description">{product.description}</p>
            <ul>
                Quantity: <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
            </ul>
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
          
          </div>
        </section>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;
