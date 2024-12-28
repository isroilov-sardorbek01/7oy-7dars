import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/ThemeSlice";
import light from "../images/lightImg.svg";
import dark from "../images/darkImg.svg";

function Theme() {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className="themeSide dark:bg-black dark:text-white pt-10">
            <div className="container dark:bg-black">
                <img src={theme === "light" ? light : dark} className="filtImg select-none" width={200} height={200} alt="" />
                <h1 className="text-[40px]">
                    {theme === "light" ? "Light" : "Dark"}
                </h1>
                <button
                    onClick={() => {
                        dispatch(change());
                    }}
                    className="px-3 bg-slate-200 py-1 rounded-xl dark:text-black active:scale-90 transition-all"
                >
                    Change Theme
                </button>
            </div>
        </div>
    );
}

export default Theme;
