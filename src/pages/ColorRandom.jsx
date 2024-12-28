import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colRandom } from "../store/ColorSlice";

function ColorRandom() {
    const dispatch = useDispatch();
    const random = useSelector((state) => state.color.value);

    function onRandom(e) {
        e.preventDefault();
        dispatch(colRandom());
    }

    return (
        <div>
            <div className="container">
                <h1>Color: {random}</h1>
                <div
                    className="w-20 h-20"
                    style={{ backgroundColor: random, width: 20, height: 20 }}
                ></div>
                <button onClick={onRandom}>Randomize</button>
            </div>
        </div>
    );
}

export default ColorRandom;
