import { Link  } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MoviePoster from "../../components/MoviePoster/MoviePoster";
//movieData.js is the files were we will put out movie info
import movieData from "../MovieData/movieData.json";
import "./MoviePage.css";

function MoviePage() {
  // this state will help us show like 10 movies and then a 
  // button will help us "show more"
  let howManyPostersShouldBeSeen = 12;
  const [visibleCount, setVisibleCount] = useState(howManyPostersShouldBeSeen);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + howManyPostersShouldBeSeen);
  };

  return (
    <div className="moviePage-main">

      <img className="movie-page-background" src="https://wallpapercave.com/wp/wp2196807.jpg"/>

      <div className="moviepage-container">
      <Navbar />

      <div className="poster-grid">
        {/* this snippet will take movie data from 'movieData.js' and put it on the page */}
        {movieData.slice(0, visibleCount).map((movie, index) => (
        
          <Link
            to={`/movies/${movie.id}`} // movie's unique id routing
            key={index}
            state={ movie  } //pass movie data using react states
          >
            <MoviePoster 
              posterUrl = { movie.posterUrl }
              movieName = { movie.movieName }
            />
          </Link>

        ))}
      </div>

      {/* this is the button to show more movies */}
      {visibleCount < movieData.length && (
        <div className="button-container">
          <button className="show-more-btn" onClick={handleClick}>
            Show More
          </button>
        </div>
      )}
      </div>
    </div>
  );
}

export default MoviePage;
