import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/userConstants"

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }



        default:
            return {
                user: null,
                isAuthenticated: false
            }
    }
}