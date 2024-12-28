import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, gap1, gap2 } from "../store/TextSlice";

function TextChange() {
    const text = useSelector((state) => state.text);
    const dispatch = useDispatch();

    return (
        <div className="mt-10">
            <div className="container">
                <h1 className="text-[60px] text-center font-bold mb-10">
                    UI text: {text}
                </h1>
                <div className="flex items-center justify-around">
                    <button
                        className="px-5 bg-slate-200 py-2 rounded-xl text-[20px]  active:scale-90 transition-all"
                        onClick={() => {
                            dispatch(gap1());
                        }}
                    >
                        Salom
                    </button>
                    <button
                        className="px-5 bg-slate-200 py-2 rounded-xl text-[20px]  active:scale-90 transition-all"
                        onClick={() => {
                            dispatch(gap2());
                        }}
                    >
                        Hayr
                    </button>
                    <button
                        className="px-5 bg-slate-200 py-2 rounded-xl text-[20px]  active:scale-90 transition-all"
                        onClick={() => {
                            dispatch(clear());
                        }}
                    >
                        Clean
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TextChange;
