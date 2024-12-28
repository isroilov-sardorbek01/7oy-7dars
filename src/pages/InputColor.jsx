import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../store/InputColorSlice";
import DisplayColor from "./DisplayColor";

function InputColor() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function onGenerate(e) {
        e.preventDefault();
        dispatch(setColor(input));
        setInput("");
        console.log(input);
    }
    return (
        <div className="mt-10">
            <div className="container flex flex-col text-center">
                <h1 className="text-[40px] font-bold text-center">
                    Choose the color
                </h1>
                <input
                    className="w-full p-3 border-2 border-black rounded-xl mb-5"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type="text"
                    placeholder="Type first # and then color #00000"
                />
                <div className="text-center">
                    <button
                        onClick={onGenerate}
                        className="px-4 py-1 w-[20%] bg-slate-200 text-[20px] font-bold rounded-xl active:scale-90"
                    >
                        Generate
                    </button>
                </div>

                <DisplayColor></DisplayColor>
            </div>
        </div>
    );
}

export default InputColor;
