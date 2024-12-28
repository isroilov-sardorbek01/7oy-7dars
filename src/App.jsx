import React from "react";
import ColorRandom from "./pages/ColorRandom";
import { Routes, Route } from "react-router-dom";
import Theme from "./pages/Theme";
import Header from "./components/Header";
import TextChange from "./pages/TextChange";
import InputColor from "./pages/InputColor";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<ColorRandom></ColorRandom>}></Route>
                <Route path="/theme" element={<Theme></Theme>}></Route>
                <Route path="/text" element={<TextChange></TextChange>}></Route>
                <Route
                    path="/inputcolot"
                    element={<InputColor></InputColor>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
