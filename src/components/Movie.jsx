import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, year, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={"coverImg"} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres !== undefined &&
          genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
