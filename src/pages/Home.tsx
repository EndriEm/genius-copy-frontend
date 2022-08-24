import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export type movie = {
  id: number;
  title: string;
  categoryId: number;
  description: string;
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
        <ul className="movies-ul">
          {movies.map((movie) => (
            <li className="movies-li">
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.image} className="image"></img>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
