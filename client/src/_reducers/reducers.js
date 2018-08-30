export const auth = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload || false;

        default:
            return state;
    }
};

export const account = (state = {nav: false, connectionList: [], requestList: []}, action) => {
    switch (action.type) {
        case 'CONNECTIONS':
            return state.nav ? {...state, nav: false} : state;

        case 'REQUESTS':
            return !state.nav ? {...state, nav: true} : state;

        case 'GET_CONNECTIONS':
            return {
                ...state,
                connectionList: action.payload
            };

        case 'GET_REQUESTS':
            return {
                ...state,
                requestList: action.payload
            };

        default:
            return state;
    }
};