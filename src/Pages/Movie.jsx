import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Movie = () => {
  const [formData, setFormData] = useState({
    name: "",
    poster: "",
    yor: "",
    plot: "",
    actors: [],
    producer: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleActorInputChange = (e, index) => {
    const actors = [...formData.actors];
    actors[index] = e.target.value;
    setFormData({ ...formData, actors });
  };

  const handleAddActor = () => {
    setFormData({ ...formData, actors: [...formData.actors, ""] });
  };

  const handleRemoveActor = (index) => {
    const actors = [...formData.actors];
    actors.splice(index, 1);
    setFormData({ ...formData, actors });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('Token=')).split('=')[1];

        const headers = {
          'Authorization': `Bearer ${token}`
        };
      const response = await axios.post("http://localhost:5000/api/admin/movie", formData,{
        headers: headers
      });
      console.log(response.data);
      toast.success("Movie added successfully!");
    } catch (error) {
      console.error("Error adding movie:", error);
      toast.error("Failed to add movie. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter movie name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="poster" className="block text-sm font-semibold mb-2">Poster URL</label>
          <input
            type="text"
            id="poster"
            name="poster"
            value={formData.poster}
            onChange={handleInputChange}
            placeholder="Enter poster URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="yor" className="block text-sm font-semibold mb-2">Year of Release</label>
          <input
            type="text"
            id="yor"
            name="yor"
            value={formData.yor}
            onChange={handleInputChange}
            placeholder="Enter year of release"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="plot" className="block text-sm font-semibold mb-2">Plot</label>
          <textarea
            id="plot"
            name="plot"
            value={formData.plot}
            onChange={handleInputChange}
            placeholder="Enter plot"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {formData.actors.map((actor, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`actor-${index}`} className="block text-sm font-semibold mb-2">Actor {index + 1}</label>
            <div className="flex items-center">
              <input
                type="text"
                id={`actor-${index}`}
                name={`actor-${index}`}
                value={actor}
                onChange={(e) => handleActorInputChange(e, index)}
                placeholder="Enter actor email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2"
              />
              <button type="button" onClick={() => handleRemoveActor(index)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddActor} className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300">Add Actor</button>

        <div className="mb-4">
          <label htmlFor="producer" className="block text-sm font-semibold mb-2">Producer</label>
          <input
            type="text"
            id="producer"
            name="producer"
            value={formData.producer}
            onChange={handleInputChange}
            placeholder="Enter producer email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300">
          Add Movie
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Movie;


