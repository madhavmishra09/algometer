import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div className=''>
          <ul className='list-none m-0 p-0 '>
            <li><a href="#AlgoMeter">AlgoMeter</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Calculate">Calculate</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App
