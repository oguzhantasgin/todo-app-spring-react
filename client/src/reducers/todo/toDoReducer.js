import {GET_TODOS, DELETE_TODO, GET_TODO} from "../../actions/types";


const initialState = {
    to_dos: [],
    to_do: {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_TODOS:
            return {

                ...state,
                to_dos: action.payload
            };

        case GET_TODO:


            return{
                ...state,
                to_do : action.payload
            };


        case DELETE_TODO:


            return {
                ...state,

                to_dos: state.to_dos.filter(

                    to_do => to_do.id !== action.payload
                )
            };

        default:
            return state;
    }
}