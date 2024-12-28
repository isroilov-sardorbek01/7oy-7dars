import { createSlice } from "@reduxjs/toolkit";
const initialState = "light";

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        change: (state) => {
            const body = document.body;
            if (state === "light") {
                body.classList.remove("light");
                body.classList.add("dark");
                return "dark";
            } else {
                body.classList.remove("dark");
                body.classList.add("light");
                return "light";
            }
        },
    },
});
export default ThemeSlice.reducer;
export const { change } = ThemeSlice.actions;
