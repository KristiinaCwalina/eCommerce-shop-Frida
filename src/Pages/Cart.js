import React, { useEffect } from "react";
import { addToCart,removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId)=> {
      dispatch(removeFromCart(productId))
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  const checkoutHandler = ()=>{
      props.history.push("/signin?redirect=shipping")
  }
  return (
    
    <div>
        <div>
    <Nav />
  </div>
  <div className="container py-5">
      
      <div className="cart-li">

        <h3 className="display-5">Shopping Cart</h3>
      </div>

      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        
          <div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                {cartItems.map((item) => (
                <tbody>
                  <tr>
                    <th scope="row" className="border-0">
                      <div className="p-2">
                        <img
                          src={item.image}
                          alt="product"
                          width="70"
                          className="img-fluid rounded shadow-sm"
                        />
                        <div className="ml-3 d-inline-block align-middle">
                          <h5 className="mb-0">{item.name}</h5>
                          <span className="text-muted font-weight-normal font-italic d-block">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </th>
                    <td className="border-0 align-middle">
                      <strong>${item.price}</strong>
                    </td>
                    <td className="border-0 align-middle">
                      <strong>
                        {item.qty}
                      </strong>
                    </td>
                    <td className="border-0 align-middle">
                      <button type="button" className="button" onClick={()=>removeFromCartHandler(item.product)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                 ))}
                
              </table>
            </div>
            </div>
              )}  

            <div className="col-lg-6" hidden={cartItems.length === 0}>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Order summary{" "}
              </div>
              <div className="p-4">
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Order Subtotal </strong>
                    <strong>
                      ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Shipping and handling</strong>
                    <strong>Free</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Tax</strong>
                    <strong>$0.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Total</strong>
                    <h5 className="font-weight-bold">
                      ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h5>
                  </li>
                </ul>
                <button
                  onClick={checkoutHandler}
                  className="btn btn-dark  py-2 btn-block"
                  disabled={cartItems.length === 0}
                >
                  Procceed to checkout
                </button>
              </div>
            </div>
          
      
     
    </div>
    <div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
