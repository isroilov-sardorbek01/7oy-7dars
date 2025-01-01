import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/TaskSlice";

function Task() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const tasks = useSelector((state) => state.TaskSlice);
    const dispatch = useDispatch();

    function validate() {
        if (name === "") {
            alert("Name is not valid!");
            return false;
        }
        if (email === "") {
            alert("Email is not valid!");
            return false;
        }
        if (!email.includes("@")) {
            alert("Email should include @");
            return false;
        }
        return true;
    }
    function handleSave(e) {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) {
            return;
        }
        const data = {
            name,
            email,
            id: Date.now(),
        };
        dispatch(add(data));
        setName("");
        setEmail("");
    }
    function onDel(id) {
        const con = confirm("Are you really want to delete?");
        if (con) {
            dispatch(remove(id));
        }
    }
    return (
        <div className="mt-20">
            <div className="container flex justify-center">
                <div className="form w-[600px] p-3 bg-slate-200 rounded-xl flex flex-col gap-4">
                    <h1 className="text-center font-bold text-[30px]">Users</h1>
                    <input
                        className="w-full p-2 border-2 border-black rounded-xl"
                        type="text"
                        placeholder="Enter the name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        className="w-full p-2 border-2 border-black rounded-xl"
                        type="email"
                        placeholder="Enter the email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <div className="flex justify-center">
                        <button
                            onClick={handleSave}
                            className="w-[150px] p-2 bg-white text-[20px] font-bold rounded-xl active:scale-90 transition-all"
                        >
                            SAVE
                        </button>
                    </div>
                    <div className="flex flex-col justify-center gap-3 mt-5 mb-3">
                        {tasks.length > 0 ? (
                            tasks.map((data) => {
                                return (
                                    <div className="flex items-center justify-between px-3 py-1 text-white bg-black rounded-xl" key={data.id}>
                                        <div className="">
                                            <h1>{data.name}</h1>
                                            <div className="">{data.email}</div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                onDel(data.id);
                                            }}
                                            className="p-1 text-black transition-all bg-white rounded-xl active:scale-90"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })
                        ) : (
                            <h1>No users yet</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
