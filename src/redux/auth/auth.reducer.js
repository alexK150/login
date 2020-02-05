const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    userName: null,
    password: null,
    isFetching: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state
    }
};

const setUserData = (id, userName, password) => ({
    type: SET_USER_DATA,
    data: {
        userId: id,
        userName: userName,
        password: password
    }
});

