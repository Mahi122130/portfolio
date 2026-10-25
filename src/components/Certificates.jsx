import React from 'react';
import certs from '../data/certificates.json';

export default function Certificates({ mode }) {
  if (!certs || certs.length === 0) {
    return (
      <div className={`rounded-lg p-6 text-center ${
        mode === 'cyber'
          ? 'cyber-border bg-gray-950 text-green-400/50'
          : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-400'
      }`}>
        <p className="text-sm">📜 Certificates will be added soon.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((cert, i) => (
        <div key={i} className={`rounded-lg overflow-hidden card-hover ${
          mode === 'cyber'
            ? 'cyber-border bg-gray-950'
            : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
        }`}>
          {cert.image && (
            <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
          )}
          <div className="p-4">
            <h3 className={`font-semibold text-sm ${
              mode === 'cyber' ? 'text-green-400' : 'text-gray-900 dark:text-white'
            }`}>{cert.title}</h3>
            {cert.issuer && (
              <p className={`text-xs mt-1 ${
                mode === 'cyber' ? 'text-green-300/50' : 'text-gray-400'
              }`}>{cert.issuer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
