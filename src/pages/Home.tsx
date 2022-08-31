import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export type Movie = {
  id: number;
  title: string;
  categoryId: number;
  description: string;
  image: string;
};

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [search, setSearch] = useState("")

  const searchMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:4999/movies")
      .then((resp) => resp.json())
      .then((moviesFromServer) => setMovies(moviesFromServer));
  }, []);

  

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header setSearch={setSearch}/>
        <ul className="movies-ul">
          {searchMovies.map((movie) => (
            <li className="movies-li">
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.image} className="image"></img>
                <h3 className="movie-title">{movie.title}</h3>
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
                id: Math.floor(Math.random() * 100),
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
