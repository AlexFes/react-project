import axios from 'axios';
import { FETCH_USER } from "./types";

export const fetchUser = () => {
    return async (dispatch) => {
        const result = await axios.get('/api/current_user');

        dispatch({ type: FETCH_USER, payload: result.data });
    };
};

export const handleToken = (token) => {
    return async (dispatch) => {
        const result = await axios.post('/api/stripe', token);

        dispatch({ type: FETCH_USER, payload: result.data });
    };
};