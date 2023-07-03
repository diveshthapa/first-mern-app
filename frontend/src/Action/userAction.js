import axios from "axios"
import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/userConstants"
import { toast } from "react-toastify"

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.post("/api/user/login", { username, password }, config)
        console.log(data)
        if (data.status) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            toast.success("Welcome To MiCasa")
        }
        else {
            toast.error(data.msg)
        }
    } catch (error) {
        toast.error(error.message)
    }
}

export const register = (reg_data) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        const { data } = await axios.post(
            "/api/user/register",
            reg_data,
            config
        );
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
        console.log(data)
        if (!data.success) {
            toast.error(data.msg)
        }
        else {
            toast.success(data.msg)
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await axios.get(
            "/api/user/me",
            config
        );
        dispatch({ type: LOAD_USER_SUCCESS, payload: data });
        console.log(data)
        if (!data.status) {
            toast.error(data.msg)
        }
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_USER_REQUEST });
        const { data } = await axios.post(
            "/api/user/logout",
            config
        );
        dispatch({ type: LOGOUT_USER_SUCCESS, payload: data });
        console.log(data)
        if (!data.status) {
            toast.error(data.msg)
        }
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAIL,
            payload: error.response.data.message,
        });
    }
}