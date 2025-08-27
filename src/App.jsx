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
      <section id="how-it-works" className='py-16 bg-gray-50'>
        <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>
          How AlgoMeter Works
        </h2>
        {/*Step 1*/}
        <div className='bg-white shoadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transform transition duration-300'>
          <h3 className='text-xl font-semibold mb-2 text-blue-600'>Paste</h3>
          <p className='text-gray-600'>Copy your algorithm/code and paste it into AlgoMeter.</p>
        </div>
        {/*Step 2*/}
        <div className='bg-white shoadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transform transition duration-300'>
          <h3 className='text-xl font-semibold mb-2 text-blue-600'>Analyze</h3>
          <p className="text-gray-600">AlgoMeter inspects complexity, efficiency, and potential issues.</p>
        </div>
        {/* Step 3 */}
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">Understand</h3>
      <p className="text-gray-600">View insights with clear explanations and performance indicators.</p>
    </div>
      </section>
    </>
  )
}

export default App
