import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: "#ffffff" };

const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        colRandom: (state) => {
            const random = `#${(Math.random() * 0xffffff)
                .toString(16)
                .padStart(6, "0")}`;
            state.value = random;
        },
    },
});

export default ColorSlice.reducer;
export const { colRandom } = ColorSlice.actions;
