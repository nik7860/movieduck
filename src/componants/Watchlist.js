import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchList, toggleWatchlist }) {
  return (
    <div>
      <h1>Your Watchlist</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            movie && (
              <MovieCard
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
