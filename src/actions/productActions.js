import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constants/productConstants";
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productConstants";


//import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productConstants';

const listProducts = ()=> async (dispatch)=> {
    try{
    dispatch({type: PRODUCT_LIST_REQUEST});
    const {data}= await axios.get ('/products');
    dispatch({type: PRODUCT_LIST_SUCCESS, payload:data});
}
catch (error){
    dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
}
}

export const detailsProducts = (productId) => (dispatch)=>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload:productId});
        const {data} =  axios.get ('/products/'+productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data});
    
} catch (error){
    dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
}
}

export  {listProducts};