import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const result = state?.result || null;

  // If no result was passed, show clear message and debug option
  if (!result) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="font-medium">No analysis result received.</p>
          <p className="text-sm text-gray-600">This can happen if the backend did not respond or you navigated to this page directly.</p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => navigate(-1)}>Back</button>
          <button className="px-4 py-2 border rounded" onClick={() => console.log('location state:', location.state)}>Log location.state</button>
        </div>
      </div>
    );
  }

  // helper to tolerate different backend key names; return null if missing
  const get = (...keys) => {
    for (const k of keys) {
      if (result[k] !== undefined && result[k] !== null) return result[k];
    }
    return null;
  };

  // normalize common fields
  const rawError = get('error', 'err', 'hasError');
  const error = rawError === true || rawError === 'true' || rawError === 1;

  const summary = get('summary', 'message', 'description') ?? 'N/A';
  const timeComplexity = get('timeComplexity', 'time', 'time_complexity', 'time_complexity_estimate') ?? 'N/A';
  const spaceComplexity = get('spaceComplexity', 'space', 'space_complexity') ?? 'N/A';
  const analysisSource = get('analysisSource', 'source', 'origin') ?? 'N/A';
  let codeSnippet = get('codeSnippet', 'code', 'snippet', '');
  if (codeSnippet === null) codeSnippet = '';

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>

      {error ? (
        <div className="bg-yellow-100 p-4 rounded mb-4">
          <strong>Warning:</strong> {summary}
        </div>
      ) : null}

      <div className="bg-white shadow rounded p-4 mb-4">
        <p><strong>Summary:</strong> {summary}</p>
        <p><strong>Time Complexity:</strong> {timeComplexity}</p>
        <p><strong>Space Complexity:</strong> {spaceComplexity}</p>
        <p><strong>Source:</strong> {analysisSource}</p>
      </div>

      {codeSnippet ? (
        <div className="bg-gray-50 border rounded p-3 mb-4">
          <strong>Code snippet:</strong>
          <pre className="whitespace-pre-wrap text-sm mt-2">{codeSnippet}</pre>
        </div>
      ) : null}

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => navigate(-1)}>Back</button>
        <button className="px-4 py-2 border rounded" onClick={() => console.log('raw result object:', result)}>Log raw result</button>
      </div>
    </div>
  );
}