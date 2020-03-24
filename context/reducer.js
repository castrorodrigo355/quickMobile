
import { 
    SET_USERS,
    REMOVE_USER,
    ADD_USER
} from "./constants";

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USERS:
            return {
                ...state, users: action.payload
            }
        case REMOVE_USER:
            return {
                ...state, users: state.users.filter((user, i) => i !== action.payload)
            }
        case ADD_USER:
            return {
                ...state, users: [...state.users, action.payload]
            }
        default: 
            return state;
    }
}

export { reducer, initialState };
