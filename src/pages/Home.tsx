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
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            fetch("http://localhost:4999/movies", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                id: Number(event.target.id.value),
                title: event.target.title.value,
                categoryId: Number(event.target.categoryId.value),
                description: event.target.description.value,
                image: event.target.image.value,
              }),
            })
              .then((resp) => resp.json())
              .then((moviesFromServer) => setMovies(moviesFromServer));
          }}
        >
          <input type="text" name="id" className="search" placeholder="id" />
          <input
            type="text"
            name="title"
            className="search"
            placeholder="title"
          />
          <input
            type="text"
            name="categoryId"
            className="search"
            placeholder="categoryId"
          />
          <input
            type="text"
            name="description"
            className="search"
            placeholder="description"
          />
          <input
            type="text"
            name="image"
            className="search"
            placeholder="image link"
          />
          <button className="post-button1">Post</button>
        </form>
      </div>
    </>
  );
}
