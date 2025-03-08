import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Moviegrid({ movies, watchList, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const genreMovie = (movie) =>
    genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();

  const matchrating = (movie) => {
    switch (rating) {
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return true;
    }
  };

  const filterMovie = movies.filter(
    (movie) =>
      genreMovie(movie) &&
      matchrating(movie) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search here!"
        value={searchTerm}
        onChange={searchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filterMovie.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isWatchlisted={watchList.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}
