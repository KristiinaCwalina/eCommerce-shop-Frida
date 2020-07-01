import axios from "axios";
import {CART_ADD_ITEM} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: [
        {product: data[0].id,
        name: data[0].product_name,
        image: data[0].image,
        price: data[0].unit_price,
        stock: data[0].stock,
        qty,}
      ],
    });
  } catch (error) {}
};

export {addToCart};
