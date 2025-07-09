import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(0);


  return (
    <div style={{padding: "2rem"}} >
      <h1>Production Mistake</h1>
      <button  onClick={() => setIsLoggedIn(!isLoggedIn)} >Toggle login</button>

      <div>
        <h3> && Operator</h3>
        {!!isLoggedIn && <p>Welcome to my World!</p>}
      </div>
      <div>
        <h3> Ternary Operator</h3>
        {isLoggedIn ? <p>Welcome to my World!</p> : "Please Login"}
      </div>
    </div>
  )
}

export default App


// when we use in the useState in -> 0, [] then when redering first time then 
// it given the problem and it is impossible to find the bug for fresher then use !! in the code
