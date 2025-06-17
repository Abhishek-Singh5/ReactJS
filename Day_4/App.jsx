import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if(counter < 20){
      console.log("Clicked", counter);
      counter += 1;
      setCounter(counter);
    }

  }

  const removeValue = () => {
    if(counter > 0){
      console.log("Clicked", counter);
      counter -= 1;
      setCounter(counter);
    }

  }

  return (

    <>
      <h1>This is React JS</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick = {addValue}>Add Value {counter}</button>
      <br/>
      <button onClick = {removeValue}>Remove Value{counter}</button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
