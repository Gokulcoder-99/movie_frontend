import { Link } from "react-router-dom";

const MovieCards = ({ id, title, poster, year, rating }) => {
  return (
    <div className="col" key={id}>
      <div className="border border-gray-200 shadow-sm rounded-lg">
        <img
          className="rounded-t-lg"
          src={poster}
          alt="Movie poster"
        />
        <div className="p-4">
          <p className="font-semibold text-lg">{title} ({year})</p>
          <div className="flex justify-between items-center mt-2">
            <Link
              className="text-blue-500 text-sm font-medium"
              to={`/moviedetails/${id}`}
              key={id}
            >
              <button
                type="button"
                className="px-2 py-1 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                View info
              </button>
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="ml-1">Rating{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCards;
