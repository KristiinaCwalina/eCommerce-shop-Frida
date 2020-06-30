import React, { useEffect,useState} from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { detailsProducts } from "../actions/productActions";

function Products(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProducts(props.match.params.id));

    return () => {
      //
    };
  }, []);
const handleAddToCart = () => {
  props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
}
  return (
    <div>
      <div>
        <Nav />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value)
                  }}
                >
                  
                  {[...Array(product.stock).keys()].map(x => 
                    <option key={x+1} value={x + 1}>{x + 1}</option>
                  )}
                </select>
              </ul>
              {product.stock > 0 ?
              <button onClick={handleAddToCart} type="button" className="btn btn-primary">
                Add to Cart
              </button>
               : 
               <div className= "outOfStock">OUT OF STOCK</div>}
            </div>
          </section>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;
