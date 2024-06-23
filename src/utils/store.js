import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slice"
import moviesSliceReducer from "./nowPlayingSlice"
const Store = configureStore({
    reducer: {
        user : userReducer,
        movies: moviesSliceReducer
    }
}) 
export default Store