'use client';

import { useState } from "react";

export default function DBForm() {
  const [formData, setFormData] = useState({
    query: "",
  });
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/db/read`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setResults(data.data);
      } else {
        setError(data.error || "An unknown error occurred.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to execute the query.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="query"
          placeholder="Enter your SQL query here..."
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Running Query..." : "Run Query"}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {results && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">Results:</h2>
          <div className="mt-2 overflow-x-auto bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm">{JSON.stringify(results, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}