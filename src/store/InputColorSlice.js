import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    color: "#4545",
};

const InputColorSlice = createSlice({
    name: "inputColor",
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export default InputColorSlice.reducer;
export const { setColor } = InputColorSlice.actions;
