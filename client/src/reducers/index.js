import {combineReducers} from "redux";
import errorReducer from "./error/errorReducer";
import toDoReducer from "./todo/toDoReducer";

export default combineReducers({

    errors: errorReducer,
    to_do: toDoReducer

});
