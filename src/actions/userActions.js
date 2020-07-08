import Axios from "axios";
import Cookie from "js-cookie";
import {USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL} from "../constants/userConstants";

const signin = (username, password)=> async (dispatch) => {
    dispatch ({ type: USER_SIGNIN_REQUEST, payload:{username,password}});
    try {
        const {data} = await Axios.post("/users/signin", {username, password});
        dispatch ({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set ("userInfo", JSON.stringify(data));
    }catch (error){
dispatch ({type: USER_SIGNIN_FAIL, payload: error.message});
    }
    }

    export {signin};