import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const TextSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        gap1: () => {
            return "Salom";
        },
        gap2: () => {
            return "Hayr";
        },
        clear: () => {
            return "";
        },
    },
});

export default TextSlice.reducer;
export const { gap1, gap2, clear } = TextSlice.actions;
