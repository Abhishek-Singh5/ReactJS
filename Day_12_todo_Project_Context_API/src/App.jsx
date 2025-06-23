import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id ===
      id ? todo : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===
  id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-gradient-to-br from-[#172842] to-[#0f172a] min-h-screen py-8 px-2">
  <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-xl px-6 py-5 text-white bg-[#1e293b] transition-all duration-300">
    <h1 className="text-4xl font-extrabold text-center mb-8 mt-2 text-cyan-400 drop-shadow">
      Manage Your Todos
    </h1>

    <div className="mb-6">
      <TodoForm />
    </div>

    <div className="flex flex-wrap gap-y-4">
      {/* Loop and Add TodoItem here */}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full bg-[#334155] rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
        >
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  </div>
</div>

            </TodoProvider>
  )
}

export default App
