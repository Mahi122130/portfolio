import React, { useState } from 'react';

export default function RAGWidget({ mode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim() || loading) return;
    const userMsg = query.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setLoading(true);
    try {
      const res = await fetch('/api/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'The request failed.');
      setMessages((prev) => [...prev, { role: 'bot', text: data.answer || 'No matching portfolio information was found.' }]);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Could not reach the server.';
      setMessages((prev) => [...prev, { role: 'bot', text: `RAG error: ${message} Make sure the backend is running with npm start.` }]);
    } finally {
      setLoading(false);
    }
  };

  const isCyber = mode === 'cyber';

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl transition-all hover:scale-110 ${
          isCyber
            ? 'bg-green-500 text-black shadow-green-500/30'
            : 'bg-blue-500 text-white shadow-blue-500/30'
        }`}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-xl shadow-2xl overflow-hidden flex flex-col ${
          isCyber
            ? 'bg-gray-950 border border-green-500/30'
            : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
        }`} style={{ maxHeight: '60vh' }}>
          {/* Header */}
          <div className={`px-4 py-3 font-semibold text-sm ${
            isCyber
              ? 'bg-green-500/10 text-green-400 border-b border-green-500/20'
              : 'bg-blue-500 text-white'
          }`}>
            {isCyber ? '> ask_mahelet.sh' : 'Ask about Mahelet'}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: '200px' }}>
            {messages.length === 0 && (
              <p className={`text-sm ${
                isCyber ? 'text-green-400/40' : 'text-gray-400'
              }`}>
                {isCyber ? '// Ask me anything...' : 'Ask me anything about Mahelet!'}
              </p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm p-2.5 rounded-lg ${
                msg.role === 'user'
                  ? isCyber
                    ? 'bg-green-500/10 text-green-300 ml-8'
                    : 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 ml-8'
                  : isCyber
                    ? 'bg-gray-900 text-green-400/80 mr-8 border border-green-500/10'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mr-8'
              }`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className={`text-sm ${isCyber ? 'text-green-400/50' : 'text-gray-400'}`}>
                {isCyber ? 'Processing...' : 'Thinking...'}
              </div>
            )}
          </div>

          {/* Input */}
          <div className={`p-3 border-t ${
            isCyber ? 'border-green-500/20' : 'border-gray-200 dark:border-gray-700'
          }`}>
            <form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); handleSend(); }}>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Ask a question about Mahelet"
                placeholder={isCyber ? '> query...' : 'Type a question...'}
                className={`flex-1 px-3 py-2 rounded-lg text-sm outline-none ${
                  isCyber
                    ? 'bg-gray-900 text-green-400 border border-green-500/30 placeholder-green-500/30 focus:border-green-500/60'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-blue-500'
                }`}
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isCyber
                    ? 'bg-green-500 text-black hover:bg-green-400 disabled:opacity-50'
                    : 'bg-blue-500 text-white hover:bg-blue-400 disabled:opacity-50'
                }`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
