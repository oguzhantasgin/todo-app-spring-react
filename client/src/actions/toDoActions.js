import axios from "axios";
import {GET_ERRORS, GET_TODOS, DELETE_TODO, GET_TODO} from "./types";


export const addToDo = (to_do, history) => async dispatch => {

    try {
        await axios.post("http://localhost:8080/api/todo", to_do);
        history.push("/");
        dispatch({

                type: GET_ERRORS,
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

export const getBackLog = () => async dispatch => {


    const res = await axios.get("http://localhost:8080/api/todo/all");
    dispatch({

        type: GET_TODOS,
        payload: res.data
    });
};

export const deleteToDo = td_id => async dispatch => {

    if (
        window.confirm(
            `Are you sure for delete NO#${td_id} TO-DO?`
        )
    ) {
        await axios.delete(`http://localhost:8080/api/todo/${td_id}`);
        dispatch({
            type: DELETE_TODO,
            payload: td_id
        });
    }
};

export const getToDo = (td_id, history) => async dispatch => {

    try {

        const res = await axios.get(`http://localhost:8080/api/todo/${td_id}`);
        dispatch({


            type: GET_TODO,
            payload: res.data
        })

    } catch (error) {

        history.push("/");

    }

};