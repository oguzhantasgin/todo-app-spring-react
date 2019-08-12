import axios from "axios";
import {DELETE_TODO, GET_ERRORS, GET_TODO, GET_TODOS} from "./types";


export const addToDo = (to_do, token, history) => async dispatch => {

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*',
            "Authorization": token
        }
    };
    axios.post("http://localhost:8080/api/todo", to_do, config).then((response) => {
        history.push("/todo");
        dispatch({
                type: GET_ERRORS,
                payload: {}
            }
        )
    }).catch((error) => {
        dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            }
        )
    })


};

export const getBackLog = (token, history) => async dispatch => {

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*',
            "Authorization": token
        }
    };

    axios.get("http://localhost:8080/api/todo/all", config).then((response) => {

        dispatch({
            type: GET_TODOS,
            payload: response.data
        });
    })
};

export const deleteToDo = (td_id, token, history) => async dispatch => {

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*',
            "Authorization": token
        }
    };

    axios.delete(`http://localhost:8080/api/todo/${td_id}`,config).then((response) => {
        dispatch({
                type: DELETE_TODO,
                payload: td_id,
            }
        );

    });
};

export const getToDo = (td_id, token, history) => async dispatch => {

        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Header': '*',
                "Authorization": token
            }
        };

        axios.get(`http://localhost:8080/api/todo/${td_id}`, config).then((res) => {
            dispatch({
                    type: GET_TODO,
                    payload: res.data
                }
            )
        }).catch((error) => {
            dispatch({
                    type: GET_ERRORS,
                    payload: " "
                }
            )
        })

    };