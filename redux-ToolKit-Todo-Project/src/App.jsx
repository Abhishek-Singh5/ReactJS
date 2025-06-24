import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mt-10 mb-8">
  <span className="inline-block bg-blue-200 text-red-600 px-4 py-1 rounded shadow">
    Redux Toolkit Todo Project
  </span>
</h1>


      <AddTodo />
      <Todos />
    </>
  )
}

export default App
