import {REGISTER_USER, LOGOUT_USER, LOGIN_USER,GET_CURRENT_USER} from "../../actions/types";

const initialState = {
    applicationUser: {},
    isAuthenticated: false,
    token: ''
};

export default function(state = initialState, action) {
    switch (action.type) {

        case REGISTER_USER:
            return {
                ...state,
                applicationUser: action.payload
            };
        case LOGOUT_USER:
            return{
                ...state,
                isAuthenticated: action.isAuthenticated,
                token: action.token
            };
        case LOGIN_USER:
            return {
                ...state,
                token: action.token,
                isAuthenticated: action.isAuthenticated
            };
        case GET_CURRENT_USER:
            return {
                ...state,
                token: action.token,
                applicationUser: action.isAuthenticated
            };
        default:
            return state;
    }
}
