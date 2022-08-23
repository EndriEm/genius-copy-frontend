import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

type movie = {
  id: number;
  title: string;
  categoryId: number;
  image: string;
};

export function Home() {
  const [movies, setMovies] = useState<movie[]>([]);

  useEffect(() => {
    fetch("http://localhost:4999/movies")
      .then((resp) => resp.json())
      .then((moviesFromServer) => setMovies(moviesFromServer));
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header />
        {movies.map((movie) => (
          <ul className="movies-ul">
            <li className="movies-li">
              <img src={movie.image} className="image"></img>
              <h2>{movie.title}</h2>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
