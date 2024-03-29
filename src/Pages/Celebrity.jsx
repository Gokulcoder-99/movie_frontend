import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Celebrity = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    bio: "",
    isActor: false,
    isProducer: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('Token=')).split('=')[1];

        const headers = {
          'Authorization': `Bearer ${token}`
        };
      const response = await axios.post("http://localhost:5000/api/admin/celebrity", formData,{
        headers: headers
      });
      console.log(response.data);
      toast.success("Data sent successfully!", {
        position: "bottom-left",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Failed to send data. Please try again later.", {
        position: "bottom-left",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Add Celebrity</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Enter your bio"
            className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Is he an actor?</label>
          <input
            type="checkbox"
            name="isActor"
            checked={formData.isActor}
            onChange={(e) => setFormData({ ...formData, isActor: e.target.checked })}
            className="mr-2"
          />
          <span className="text-sm">Yes</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Is he a producer?</label>
          <input
            type="checkbox"
            name="isProducer"
            checked={formData.isProducer}
            onChange={(e) => setFormData({ ...formData, isProducer: e.target.checked })}
            className="mr-2"
          />
          <span className="text-sm">Yes</span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Celebrity;
