import { useState } from 'react'
import './App.css'
import Navbar from "./nb";
import codingVID from '/coding vid.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <section id="About" className='py-16 bg-gradient-to-r from-blue-50 to-indigo-100'>
        <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>
          How AlgoMeter Works
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4'>
          {/*Step 1*/}
          <div className='bg-white shadow-md rounded-2xl mx-auto max-w-xl w-full p-6 text-center hover:shadow-xl hover:scale-105 transform transition duration-300'>
            <h3 className='text-xl font-semibold mb-2 text-blue-600'>Paste</h3>
            <p className='text-gray-600'>Copy your algorithm/code and paste it into AlgoMeter.</p>
          </div>
          {/*Step 2*/}
          <div className='bg-white shadow-md rounded-2xl mx-auto max-w-xl w-full p-6 text-center hover:shadow-xl hover:scale-105 transform transition duration-300'>
            <h3 className='text-xl font-semibold mb-2 text-blue-600'>Analyze</h3>
            <p className="text-gray-600">AlgoMeter inspects complexity, efficiency, and potential issues.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white shadow-md rounded-2xl mx-auto max-w-xl w-full p-6 text-center hover:shadow-xl hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Understand</h3>
            <p className="text-gray-600">View insights with clear explanations and performance indicators.</p>
          </div>
        </div>
      </section>
      <section id="Calculate" className='py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-100'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          Try Algometer
        </h2>
        <p className='text-center text-gray-600 mb-10'>
          Paste your algorithm below and see how AlgoMeter will analyze it.
        </p>
        <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6'>
          {/*Code Input Box*/}
          <textarea className='w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none font-mono text-sm' placeholder='// Paste your algorithm here...' />
        </div>
        {/*Calculate Button*/}
        <div className='flex justify-center mt-6'>
          <button className=' px-4 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300'>Analyze</button>
        </div>
      </section >
    </>
  )
}

export default App
