import React, { useState } from 'react'
import './App.css'
import Navbar from "./nb.jsx";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Result from './res.jsx';

function App() {
	const [inputCode, setInputCode] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleAnalyze = async () => {
		if (!inputCode.trim()) return;
		setLoading(true);
		try {
			// use same-origin path so Vite dev server can proxy to backend (avoids CORS)
			let res = await fetch('https://algometer-backend.onrender.com/api/analyze', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ code: inputCode })
			});

			if (!res.ok) {
				// try alternate proxied endpoint if server exposes it
				try {
					res = await fetch('https://algometer-backend.onrender.com/api/calculate', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ code: inputCode })
					});
				} catch (e) {
					// ignore and fallback below
				}
			}

			let result;
			if (res && res.ok) {
				// log status and body for debugging
				console.log('backend response status:', res.status);
				result = await res.json();
			} else {
				// Minimal fallback when backend is unavailable
				result = {
					error: true,
					summary: 'Backend unavailable. Please start your calc.cjs server on localhost:8080.',
					codeSnippet: inputCode ? inputCode.slice(0, 2000) : ''
				};
			}

			// Log the raw result for debugging (check browser console)
			console.log('analysis result:', result);

			navigate('/result', { state: { result } });
		} catch (err) {
			console.error('analyze error:', err);
			const result = {
				error: true,
				summary: 'Network error while contacting analysis backend.',
				codeSnippet: inputCode ? inputCode.slice(0, 2000) : ''
			};
			navigate('/result', { state: { result } });
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div>
								<Navbar />
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
									<textarea
										className='w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none font-mono text-sm'
										placeholder='// Paste your algorithm here...'
										value={inputCode}
										onChange={e => setInputCode(e.target.value)}
									/>
								</div>
								{/*Calculate Button*/}
								<div className='flex justify-center mt-6'>
									<button
										className=' px-4 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300'
										onClick={handleAnalyze}
										disabled={loading}
									>
										{loading ? 'Analyzing...' : 'Analyze'}
									</button>
								</div>
							</section>
						</>
					}
				/>
				<Route path="/result" element={<Result />} />
			</Routes>
		</>
	);
}

export default App
