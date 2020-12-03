import {
    LOGIN_SUCCESS,USER_LOADED_FAIL,USER_LOADED_SUCCESS,LOGIN_FAIL
} from '../actions/types';

const initialState =  {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}

export default function(state =initialState,action) {
    const {type, payload}  = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh:payload.refresh
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
            localStorage.removeItem('access', payload.access)
            return{
                ...state,
                access: null,
                refresh:null,
                isAuthenticated:null,
                user:null
            }
        default:
            return state
    }

}