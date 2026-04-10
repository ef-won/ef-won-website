import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  features: string[];
  apiEndpoint?: string;
  liveUrl?: string;
  buttonLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  features,
  apiEndpoint,
  liveUrl,
  buttonLabel = 'View Live',
}: ProjectCardProps) {
  return (
    <div className="bg-[rgba(17,24,42,0.85)] border border-slate-700 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <span role="img" aria-label="rocket">🚀</span> {title}
      </h2>
      <p className="mb-3 text-lg text-slate-200">{description}</p>
      <p className="mb-4 text-sm text-slate-400"><span className="font-semibold text-white">Tech Stack:</span> {tech}</p>
      <hr className="my-4 border-slate-700" />
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="bolt">⚡</span> Key Features</h3>
      <ul className="list-disc list-inside mb-4 text-slate-200">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <hr className="my-4 border-slate-700" />
      {apiEndpoint && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2"><span role="img" aria-label="globe">🌐</span> Live System</h3>
          <p className="text-sm text-slate-300">API Endpoint: <span className="bg-slate-800 px-2 py-1 rounded text-slate-100 font-mono">{apiEndpoint}</span></p>
        </div>
      )}
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <button className="mt-2 px-5 py-2 bg-black hover:bg-slate-900 text-white rounded-lg font-semibold shadow transition">
            🚀 {buttonLabel}
          </button>
        </a>
      )}
    </div>
  );
}
