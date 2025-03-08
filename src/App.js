import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Moviegrid from "./componants/Moviegrid";
import Watchlist from "./componants/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const [watchList, setwatchList] = useState([]);
  const toggleWatchlist = (movieId) => {
    setwatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/Watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Moviegrid
                  movies={movies}
                  watchList={watchList}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/Watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchList={watchList}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
