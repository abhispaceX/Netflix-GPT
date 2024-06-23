import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice(
    {
        name: 'movies',
        initialState: {
            nowPlaying:null,
           videoTrailer :null,
           
        },
        reducers: {
            addNowPlaying: (state,action)=>{
               state.nowPlaying=action.payload 
            },
            addTrailerVideo:(state,action)=>{
                state.videoTrailer=action.payload
            },
            addPopular:(state,action)=>{
                state.popular=action.payload
            },
            addTopRated:(state,action)=>{
                state.topRated=action.payload
            },
            addUpcoming:(state,action)=>{
                state.upcoming=action.payload
            }
        }
    }
)
export default moviesSlice.reducer
export const {addNowPlaying,addTrailerVideo,addPopular,addTopRated,addUpcoming}=moviesSlice.actions