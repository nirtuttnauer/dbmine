'use client';
import { useState } from 'react';

export default function DBForm() {
  const [formData, setFormData] = useState({
    host: '',
    user: '',
    password: '',
    database: '',
    query: '',
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/db/read`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setResults(data.data);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">DB Query Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="host" className="block text-sm font-medium text-gray-700">
            Host
          </label>
          <input
            type="text"
            name="host"
            id="host"
            placeholder="Enter Host"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="user" className="block text-sm font-medium text-gray-700">
            User
          </label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Enter User"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="database" className="block text-sm font-medium text-gray-700">
            Database
          </label>
          <input
            type="text"
            name="database"
            id="database"
            placeholder="Enter Database"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">
            SQL Query
          </label>
          <textarea
            name="query"
            id="query"
            placeholder="Enter SQL Query"
            rows={4}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Run Query
        </button>
      </form>

      {results && (
        <div className="mt-8 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Results:</h2>
          <pre className="text-sm text-gray-700 overflow-auto bg-gray-50 p-2 rounded-md">
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
