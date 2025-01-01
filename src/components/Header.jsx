import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="bg-slate-200 shadow-xl p-2">
            <div className="container flex items-center justify-between">
                <Link
                    className="text-[40px] font-bold select-none text-[#020e3a]"
                    draggable={false}
                    to="/"
                >
                    7oy 7dars
                </Link>
                <ul className="flex">
                    <li className="headLink">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/"
                        >
                            Random Color
                        </NavLink>
                    </li>
                    <li className="headLink">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/theme"
                        >
                            Theme
                        </NavLink>
                    </li>
                    <li className="headLink">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/text"
                        >
                            TextChange
                        </NavLink>
                    </li>
                    <li className="headLink">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/inputcolor"
                        >
                            InputColor
                        </NavLink>
                    </li>
                    <li className="headLink">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/task"
                        >
                            Task
                        </NavLink>
                    </li>
                </ul>
                <h1 className="text-[40px] font-bold select-none text-[#020e3a]">
                    Lorem
                </h1>
            </div>
        </div>
    );
}

export default Header;
