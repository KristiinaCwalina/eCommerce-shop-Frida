import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { detailsProducts } from "../actions/productActions";


function Products(props) {
  const productDetails = useSelector(state => state.productDetails);
  const {product,loading, error} = productDetails;
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProducts(props.match.params.id));
   
    return () => {
      //
    };
  }, []);
 
  return (
    <div>
      <div>
        <Nav />
      </div>
      {
        loading? <div>Loading...</div>:
        error? <div>{error}</div>:
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
              <h2>{product.product_name}</h2>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <p className="price">$ {product.unit_price}</p>
              <p className="description">{product.product_description}</p>
              <ul>
                Quantity:{" "}
                <select>
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
}

      <div>
        <Footer />
      </div>
    </div>
  );
     
}

export default Products;
