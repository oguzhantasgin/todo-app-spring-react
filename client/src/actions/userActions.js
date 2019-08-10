import axios from "axios";
import {REGISTER_USER, GET_ERRORS} from "./types";

export const registerUser = (applicationUser, history) => async dispatch => {

    try {
        await axios.post("http://localhost:8080/api/user/sign-up", applicationUser);
        history.push("");
        dispatch({

                type: REGISTER_USER,
                payload: {}
            }
        )
    } catch (error) {
        dispatch({

                type: GET_ERRORS,
                payload: error.response.data
            }
        )


    }

};