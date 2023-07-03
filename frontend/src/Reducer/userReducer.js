import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGOUT_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/userConstants"

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case USER_LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }

        case USER_LOGIN_FAIL:
        case LOAD_USER_FAIL:
        case REGISTER_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
            }

        case LOGOUT_USER_SUCCESS:
            return {
                user: null,
                isAuthenticated: false
            }



        default:
            return {
                user: null,
                isAuthenticated: false
            }
    }
}