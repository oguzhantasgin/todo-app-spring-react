import {REGISTER_USER, LOGOUT_USER, LOGIN_USER} from "../../actions/types";

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
        default:
            return state;
    }
}
