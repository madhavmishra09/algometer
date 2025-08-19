import { useState } from 'react'
import './App.css'
import codingIMG from '/coding.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div>
          <ul className='m-0 p-5 font-medium text-3xl flex gap-10 justify-center items-center bg-gray-200'>
            <li><a href="#AlgoMeter">AlgoMeter</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Calculate">Calculate</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <img src={codingIMG} alt="" srcset="" className='flex justify-start items-start w-64 h-auto inline-block'/>
      </div>
    </>
  )
}

export default App
