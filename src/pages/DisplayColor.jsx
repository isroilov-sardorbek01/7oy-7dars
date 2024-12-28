import React from "react";
import { useSelector } from "react-redux";

function DisplayColor() {
    const InputColor = useSelector((state) => state.InputColor.color);

    return (
        <div>
            <div
                className=""
                style={{ backgroundColor: InputColor, width: 200, height: 200 , borderRadius:8 ,marginTop:50 }}
            ></div>
        </div>
    );
}

export default DisplayColor;
