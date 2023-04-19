import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Reducer/UserReducer"

//asign name to the state
const userRed = {
    users: UserReducer
}

//configure store 
const store = configureStore({
    reducer: userRed,
    devTools: true
});

export default store