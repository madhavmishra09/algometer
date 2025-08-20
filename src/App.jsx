import { useState } from 'react'
import './App.css'
import codingVID from '/coding vid.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div>
          <ul className='m-0 p-5 font-medium text-3xl flex gap-10 justify-center items-center bg-gray-400'>
            <li><a href="#AlgoMeter">AlgoMeter</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Calculate">Calculate</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className='relative w-full h-screen overflow-hidden'>
        <video src={codingVID} alt="Video For Background" srcset="" className='relative w-full h-full object-cover brightness-50' loop autoPlay muted playsInline />
        <div className='relative z-10 flex items-center justify-center h-full'>
          <div className='bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg max-w-md text-center'>
            <h1 className='text-3xl font-bold mb-4'>Welcome to AlgoMeter</h1>
            <p className='text-gray-700'>Analyze, calculate, and optimie your algorithms with ease.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
