import { createSlice } from "@reduxjs/toolkit";
import { createUser,updateUser,deleteUser , readAllUsers} from "../Action/UserAction";

//initialization of state
const initialState = [];

//reducer configuration
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: {
        [readAllUsers.fulfilled]:(state,action) => {
            return [...action.payload]
        },
        [createUser.fulfilled]: (state,action ) => {
            state.push(action.payload)
        },
        [updateUser.fulfilled]: (state,action ) => {
            const index = state.findIndex((item) => item.id === action.payload.id)
            state[index] = {
                ...state[index],
                ...action.payload
            }
        },
        [deleteUser.fulfilled]: (state,action ) => {
            let index = state.findIndex(({id}) => id === action.payload.id)
            state.splice(index,1)
        }
    }
});

const { reducer } = userSlice

export default reducer