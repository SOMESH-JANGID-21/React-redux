import { createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../Api/UserApi";

// createAsyncThunk(action,callback)

export const readAllUsers = createAsyncThunk('users/readall',async () => {
    const res = await UserApi.getAll()
    // console.log("user data = " , res.data)
    return res.data.users 

})

export const createUser = createAsyncThunk('users/create',async (user) => {
    // console.log(`create User = `, user)
    const res = await UserApi.create(user)
    return res.data
})

export const updateUser = createAsyncThunk('users/update',async ({user,id}) => {
    // console.log(`update User = `, user)
    // console.log(`update User id = `, id)

    const res = await UserApi.update(user,id)
    return res.data
})

export const deleteUser = createAsyncThunk('users/delete',async ({id}) => {
    // console.log(`delete User id = `, id)
    await UserApi.delete(id)
    return {id}
})