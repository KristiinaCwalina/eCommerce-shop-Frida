import React, { useEffect } from "react";
import {addToCart} from "../actions/cartActions";
import { useDispatch } from "react-redux";

function Cart (props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
const dispatch = useDispatch();
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [])
    return <div className="cart">
        <div className = "cart-list"></div>
        <ul className = "cart-list-container">
            <li>
                <h3>Shopping Cart</h3>
            </li>
        </ul>
        <div className="cart-action"></div>
    </div>
}

export default Cart;