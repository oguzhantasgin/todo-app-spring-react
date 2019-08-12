import axios from "axios";
import {REGISTER_USER, LOGIN_USER, GET_ERRORS, LOGOUT_USER} from "./types";
import history from "../history"

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

export const loginUser = (user, history) => async dispatch => {

    axios.post("http://localhost:8080/login", user)
        .then((response) => {
            history.push("");
            dispatch({
                type: LOGIN_USER,
                token: response.headers.authorization,
                isAuthenticated: true
            })
        })
        .catch((error) => {
            history.push("/");
            dispatch({
                type: GET_ERRORS,
                payload: "error",
                isAuthenticated: false

            })
        });

};

export const logoutUser = () => async dispatch => {
    history.push("");
    dispatch({

        type: LOGOUT_USER,
        token: '',
        isAuthenticated: false
    })

};