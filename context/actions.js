import { 
    SET_USERS,
    REMOVE_USER,
    ADD_USER
} from "./constants";

const setUsers = data => ({
    type: SET_USERS,
    payload: data
})

const removeUser = idx => ({
    type: REMOVE_USER,
    payload: idx
})

const addUser = user => ({
    type: ADD_USER,
    payload: user
})

export { 
    setUsers,
    removeUser,
    addUser
};
