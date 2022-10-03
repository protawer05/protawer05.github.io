import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
export const fetchHomeworks = createAsyncThunk('homeworks/fetchHomeworks', async () => {
    const res = await axios.get(
        `https://63356ac08aa85b7c5d1acafc.mockapi.io/homeworks`
    );
    return res.data;
});

const initialState = {
    homeworks: [],
    status: 'loading'
}
const homeworkSlice = createSlice({
    name: 'homework',
    initialState,
    reducers: {
        addHomework(state, action){
            state.homeworks.push(action.payload)
        },
        deleteHomework(state, action){
            state.homeworks = state.homeworks.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchHomeworks.pending]: (state) => {
            state.status = 'loading';
            state.homeworks = [];
        },
        [fetchHomeworks.fulfilled]: (state, action) => {
            state.homeworks = action.payload;
            state.status = 'success';
        },
        [fetchHomeworks.rejected]: (state) => {
            state.status = 'error';
            state.homeworks = [];
        }
    }
})

export const {addHomework, deleteHomework} = homeworkSlice.actions;
export default homeworkSlice.reducer;