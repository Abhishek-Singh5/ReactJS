import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex justify-center mt-8">
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl px-4"
      >
        <input
          type="text"
          className="flex-1 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full sm:w-auto"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
