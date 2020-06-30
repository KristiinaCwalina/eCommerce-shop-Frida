import axios from "axios";
import {CART_ADD_ITEM} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get("products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        name: data.product_name,
        image: data.image,
        price: data.unit_price,
        stock: data.stock,
        qty,
      },
    });
  } catch (error) {}
};

export {addToCart};
