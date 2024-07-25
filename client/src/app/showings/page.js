"use client";

import { useEffect, useState } from "react";
import SingleMovieCard from "../components/SingleMovieCard";
import "../showings.css";

export default function Showings() {
  // single card for movie which will then be mapped over
  // fetch data useEffect
  // useState to handle state change & to show different ui
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:9090/api/shows/all-open")
        .then((response) => response.json())
        .then((data) => setMovieArray(data))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  const temp = "string";
  // console.log(movieArray.showings);
  // movie objects < showings array < movieArray object

  const showingsArray = movieArray.showings;

  return (
    <main>
      <div className="movie-card-container-parent">
        <div className="movie-card-container-header">Today's Deals</div>
        <div className="movie-card-container-child">
          <SingleMovieCard showingsArray={showingsArray} />
        </div>
      </div>
    </main>
  );
}
