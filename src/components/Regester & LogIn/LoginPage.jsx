import axios from "axios";
import  { useState } from "react";

export default function LoginPage() {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      password,
      email,
      skills,
      experience,
      interest,
    };

  /*  try {
      const response = await axios.post("http://localhost:8000/endpoint", formData);
      console.log("Response from server:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };*/

    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full px-6 py-8 bg-white rounded-lg shadow-md lg:w-1/3">
        <h2 className="mb-6 text-4xl font-bold text-center text-purple-800">
          Registration Form
        </h2>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
            Name:
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 text-gray-800 border border-black rounded-lg focus:outline-none focus:ring focus:ring-purple-800"
          />
        </div>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
            Password:
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 text-gray-800 border border-black rounded-lg focus:outline-none focus:ring focus:ring-purple-800"
          />
        </div>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
            Email:
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 text-gray-800 border border-black rounded-lg focus:outline-none focus:ring focus:ring-purple-800"
          />
        </div>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
            Skills:
          </label>
          <input
            type="text"
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-3 text-gray-800 border border-black rounded-lg focus:outline-none focus:ring focus:ring-purple-800"
          />
        </div>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
            Experience:
          </label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-5 py-3 text-gray-800 border border-black rounded-lg focus:outline-none focus:ring focus:ring-purple-400"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
            Interest:
          </label>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-3 text-gray-800 border border-black rounded-lg focus:outline-none focus:ring focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 text-white bg-purple-700 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-800"
        >
          Submit
        </button>
        
      </form>
    </div>
  );
}
