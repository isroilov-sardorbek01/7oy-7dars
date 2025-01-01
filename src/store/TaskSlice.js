import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const TaskSlice = createSlice({
    name: "TaskSlice",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});
export default TaskSlice.reducer;
export const { add, remove } = TaskSlice.actions;
