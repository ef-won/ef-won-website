'use client';

import { useState } from 'react';

export default function DeployDashboard() {
  const [repoUrl, setRepoUrl] = useState('');
  const [appName, setAppName] = useState('');
  const [port, setPort] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function deploy() {
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('https://api.ef-won.com/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo, app_name, port })
      });
      const data = await res.json();
      setResult(data.url ? `Live URL: ${data.url}` : 'Deployment failed.');
    } catch (e) {
      setResult('Error deploying app.');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgba(17,24,42,0.9)] px-4">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span role="img" aria-label="rocket">🚀</span> Deploy Your App
        </h2>
        <input
          className="w-full mb-4 px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="GitHub Repo URL"
          value={repoUrl}
          onChange={e => setRepoUrl(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="App Name"
          value={appName}
          onChange={e => setAppName(e.target.value)}
        />
        <input
          className="w-full mb-6 px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Port"
          value={port}
          onChange={e => setPort(e.target.value)}
        />
        <button
          className="w-full py-2 bg-black hover:bg-slate-800 text-white rounded-lg font-semibold shadow transition mb-4"
          onClick={deploy}
          disabled={loading}
        >
          {loading ? 'Deploying...' : 'Deploy'}
        </button>
        <h3 className="text-lg text-primary min-h-[2rem]">{result}</h3>
      </div>
    </div>
  );
}
