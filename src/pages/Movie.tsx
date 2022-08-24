import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";

type movie = {
  id: number;
  title: string;
  categoryId: number;
  description: string;
  image: string;
};

export function Movie() {
  const [movie, setMovie] = useState<movie>();
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4999/movies/${params.movieId}`)
      .then((resp) => resp.json())
      .then((movies) => setMovie(movies));
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header />
        <div className="movie-details ">
          <img src={movie?.image} className="image2"></img>

          <h2 className="title2">{movie?.title}</h2>
          <p className="description2">{movie?.description}</p>
          <textarea
            name="textarea"
            id="textarea"
            cols="20"
            rows="10"
            className="textarea"
          ></textarea>
          <button className="sign-button1">Comment</button>
        </div>
      </div>
    </>
  );
}