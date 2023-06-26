import axios from "axios"
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/userConstants"
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
            toast.success("Welcome To real State")
        }
        else {
            toast.error(data.msg)
        }
    } catch (error) {
        toast.error(error.message)
    }
}
