import {configureStore} from "@reduxjs/toolkit";
import homeworkSlice from "./slices/homeworkSlice";
const store = configureStore({
    reducer: {homeworks: homeworkSlice}
})
export default store;