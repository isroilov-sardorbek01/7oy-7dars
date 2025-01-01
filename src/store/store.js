import { configureStore } from "@reduxjs/toolkit";
import ColorReducer from "./ColorSlice";
import ThemeReducer from "./ThemeSlice";
import TextReducer from "./TextSlice";
import InputColorReducer from "./InputColorSlice";
import TaskReducer from "./TaskSlice";

export const store = configureStore({
    reducer: {
        color: ColorReducer,
        theme: ThemeReducer,
        text: TextReducer,
        InputColor: InputColorReducer,
        TaskSlice: TaskReducer,
    },
});
