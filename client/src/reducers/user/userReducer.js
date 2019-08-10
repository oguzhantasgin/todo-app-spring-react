import {REGISTER_USER, LOGOUT_USER, LOGIN_USER} from "../../actions/types";

const initialState = {
    applicationUser: {}
};

export function a(state = initialState, action) {
    switch (action.type) {

        case REGISTER_USER:
            return {

                ...state,
                applicationUser: action.payload
            };

        case LOGOUT_USER:


            return{
                ...state,

            };


        case LOGIN_USER:


            return {
                ...state,

            };

        default:
            return state;
    }
}

export default {
    a
}