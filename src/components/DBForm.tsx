'use client'
// components/DBForm.js
import { useState } from "react";

export default function DBForm() {
  const [formData, setFormData] = useState({
    host: "",
    user: "",
    password: "",
    database: "",
    query: "",
  });
  const [results, setResults] = useState(null);

  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
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
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="host" placeholder="Host" onChange={handleChange} />
        <input type="text" name="user" placeholder="User" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="text" name="database" placeholder="Database" onChange={handleChange} />
        <textarea name="query" placeholder="SQL Query" onChange={handleChange}></textarea>
        <button type="submit">Run Query</button>
      </form>
      {results && (
        <div>
          <h2>Results:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}