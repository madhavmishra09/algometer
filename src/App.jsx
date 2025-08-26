import { useState } from 'react'
import './App.css'
import codingVID from '/coding vid.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div>
          <ul className='m-0 p-5 font-medium text-2xl flex gap-10 justify-center items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md'>
            <li className='relative group'><a href="#AlgoMeter" className='text-white transition duration-300 ease-in-out hover:text-black'>AlgoMeter</a></li>
            <li className='relative group'><a href="#About" className='text-white transition duration-300 ease-in-out hover:text-black'>About</a></li>
            <li className='relative group'><a href="#Calculate" className='text-white transition duration-300 ease-in-out hover:text-black'>Calculate</a></li>
            <li className='relative group'><a href="#Contact" className='text-white transition duration-300 ease-in-out hover:text-black'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App
