import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
      )
    ).json();
    console.log(json.data);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={
                movie.description_full.length > 200
                  ? `${movie.description_full.slice(0, 197)}...`
                  : movie.description_full
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
