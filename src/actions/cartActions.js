import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import Cookie from "js-cookie";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: [
        {
          product: data[0].id,
          name: data[0].product_name,
          image: data[0].image,
          price: data[0].unit_price,
          stock: data[0].stock,
          qty,
        },
      ],
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
export { addToCart, removeFromCart };
