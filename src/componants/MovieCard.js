import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handler = (e) => {
    e.target.src = "/images/default.jpg";
  };

  const getRating = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img src={`/images/${movie.image}`} alt={movie.title} onError={handler} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRating(movie.rating)}`}>
          {movie.rating}
        </p>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
