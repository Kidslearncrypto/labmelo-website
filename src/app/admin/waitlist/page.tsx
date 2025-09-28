'use client';

import { useState, useEffect } from 'react';

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

export default function AdminWaitlistPage() {
  const [emails, setEmails] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const response = await fetch('/api/waitlist');
      const data = await response.json();
      
      if (response.ok) {
        setEmails(data.emails || []);
      } else {
        setError('Failed to fetch waitlist data');
      }
    } catch (err) {
      setError('Failed to fetch waitlist data');
    } finally {
      setLoading(false);
    }
  };

  const exportEmails = () => {
    const csvContent = [
      'Email,Timestamp',
      ...emails.map(entry => `${entry.email},${entry.timestamp}`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'waitlist-emails.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-olive border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-off-white">Loading waitlist data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-off-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Waitlist Admin</h1>
          <div className="flex items-center justify-between">
            <p className="text-off-white/80">
              Total signups: <span className="font-bold text-olive">{emails.length}</span>
            </p>
            <button
              onClick={exportEmails}
              className="bg-gradient-to-r from-olive to-copper text-off-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
            >
              Export CSV
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        <div className="bg-slate/90 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-off-white/80">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-off-white/80">Signup Date</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((entry, index) => (
                  <tr key={index} className="border-t border-white/5">
                    <td className="px-6 py-4 text-sm text-off-white">{entry.email}</td>
                    <td className="px-6 py-4 text-sm text-off-white/60">
                      {new Date(entry.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {emails.length === 0 && (
          <div className="text-center py-12">
            <p className="text-off-white/60">No waitlist signups yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
