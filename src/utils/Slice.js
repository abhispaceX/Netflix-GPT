import {createSlice}from "@reduxjs/toolkit"
//create Slice

const Slice=createSlice({
 name:"user",
 initialState:null,
 reducers:{
    addUser(state,action){
       return action.payload
    },
    removeUser(state){
        return null
    }
 }
})

export const {addUser,removeUser}=Slice.actions
export default Slice.reducer