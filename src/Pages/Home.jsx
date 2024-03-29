import { useEffect, useState } from "react";
import Carousels from "../components/Carousel";
import axios from "axios";
import MovieCards from "../components/MovieCards";

const Home = () => {
  const [moiveData, setMovieDate] = useState([]);
  useEffect(() => {
    (async function () {
      const respones = await axios.get("https://moviesapi.ir/api/v1/movies");
      setMovieDate(respones.data.data);
    })();
  }, []);

  return (
    <>
      <div>
        <Carousels />
        <div className="py-5">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
              {moiveData?.map((movie) => {
                return (
                  <MovieCards
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster}
                    id={movie.id}
                    year={movie.year}
                    rating={movie.imdb_rating}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
