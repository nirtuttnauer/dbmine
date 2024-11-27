'use client'
// components/DBForm.js
import { useState } from "react";

export default function AddConnectionForm() {
  const [formData, setFormData] = useState({
    host: "",
    user: "",
    password: "",
    database: "",
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
      </form>
    </div>
  );
}