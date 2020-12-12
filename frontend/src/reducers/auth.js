import {
    LOGIN_SUCCESS,USER_LOADED_FAIL,
    USER_LOADED_SUCCESS,LOGIN_FAIL,
    AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL,
    LOGOUT,
    PASSWORD_CONFIRM_RESET_FAIL,
    PASSWORD_CONFIRM_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS
} from '../actions/types';

const initialState =  {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action) {
    const {type, payload}  = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user:payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user:null
            }
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_CONFIRM_RESET_SUCCESS:
        case PASSWORD_CONFIRM_RESET_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }

}