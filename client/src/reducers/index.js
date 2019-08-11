import {combineReducers} from "redux";
import errorReducer from "./error/errorReducer";
import toDoReducer from "./todo/toDoReducer";
import userReducer from "./user/userReducer";

export default combineReducers({

    errors: errorReducer,
    to_do: toDoReducer,
    user: userReducer

});
