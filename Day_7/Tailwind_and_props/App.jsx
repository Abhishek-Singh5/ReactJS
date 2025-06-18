import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind CSS</h1>

      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfzPwQGzqW3nfQOepxOwrfZlBxs-n0oVEy51ELd_UTE4SVlndwKLwHb2BL_hOhM1heXg&usqp=CAU" alt="" width="384" height="512"/>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Abhishek Singh
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Software Engineer, New Delhi
      </div>
    </figcaption>
  </div>
</figure>

    <Card username="Abhishek Singh" btntext='push'/>
    <Card username="Vishal Singh" btntext='click'/>
    <Card username="Bluff Master"/>

    </>


  )
}

export default App
