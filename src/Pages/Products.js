import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import{listProducts} from '../actions/productActions';

function Products (props) {
  //const [products, setProduct] = useState([]);
  const productId = +props.match.params.id;
  const product = products.find((p) => p.id === productId);
  const productList = useSelector(state=> state.productList);
  const {products, loading, error}=productList;
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(listProducts());
    return () => {};
  }, []);
  return (
    loading? <div>Loading...</div>:
    error? <div>{error}</div>:
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
            <h2>{products.product_name}</h2>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <p className="price">$ {products.unit_price}</p>
            <p className="description">{products.product_description}</p>
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
