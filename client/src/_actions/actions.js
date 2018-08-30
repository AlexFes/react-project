import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
    const result = await axios.get('/api/current_user');

    dispatch({ type: 'FETCH_USER', payload: result.data });
};

export const handleToken = (token) => async (dispatch) => {
    const result = await axios.post('/api/stripe', token);

    dispatch({ type: 'FETCH_USER', payload: result.data });
};

export const getConnections = () => async (dispatch) => {
    const result = axios.get('/api/connections/getConnections');

    dispatch({ type: 'GET_CONNECTIONS', payload: result.data });
};