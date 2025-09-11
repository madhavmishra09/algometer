import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};
  const { timeComplexity, spaceComplexity } = result || {};

  return (
    <section className='py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen'>
      <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>
        Analysis Result
      </h2>
      <div className='max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center'>
        <p className='text-xl font-semibold text-blue-600 mb-4'>Time Complexity</p>
        <p className='text-gray-700 text-lg mb-6'>{timeComplexity || 'N/A'}</p>
        <p className='text-xl font-semibold text-blue-600 mb-4'>Space Complexity</p>
        <p className='text-gray-700 text-lg mb-8'>{spaceComplexity || 'N/A'}</p>
        <button
          className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300'
          onClick={() => navigate('/')}
        >
          Refresh
        </button>
      </div>
    </section>
  );
}

export default Result;