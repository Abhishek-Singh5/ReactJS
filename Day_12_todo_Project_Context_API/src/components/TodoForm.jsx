import React, { useState } from "react";
import { useTodo } from "../contexts";
import App from "../App";

function TodoForm() {
    
    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({todo, completed : false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Make Your Todo Lists...."
                className="w-full border text-1xl border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 p-4"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-red-400 text-black shrink-0 font-bold">
                Add
            </button>
        </form>
    );
}

export default TodoForm;