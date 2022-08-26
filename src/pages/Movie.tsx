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

type comment = {
  id: number;
  movieId: number;
  content: string;
};

export function Movie() {
  const [movie, setMovie] = useState<movie>();

  const [comments, setComments] = useState<comment[]>([]);

  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4999/movies/${params.movieId}`)
      .then((resp) => resp.json())
      .then((movies) => setMovie(movies));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4999/comments?movieId=${params.movieId}`)
      .then((resp) => resp.json())
      .then((comments) => setComments(comments));
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

          <form
            onSubmit={(event) => {
              event.preventDefault();
              fetch("http://localhost:4999/comments", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  id: Number(event.target.id.value),

                  movieId: Number(event.target.movieId.value),
                  content: event.target.content.value,
                }),
              })
                .then((resp) => resp.json())
                .then((commentFromServer) => setComments(commentFromServer));
            }}
          >
            <input type="text" name="id" className="search" placeholder="id" />
            <input
              type="text"
              name="movieId"
              className="search"
              placeholder="movieId"
            />
            <textarea
              name="content"
              id="textarea"
              cols="20"
              rows="10"
              className="textarea"
            ></textarea>
            <button className="sign-button1">Comment</button>
          </form>
        </div>
        <div className="comments-field">
          <div>
            {comments.map((comment) => (
              <div className="field-elements">
                <p className="review">-{comment?.content}</p>
                <button
                  className="delete-button"
                  onClick={(event) => {
                    event.preventDefault();
                    fetch(`http://localhost:4999/comments/${comment.id}`, {
                      method: "DELETE",
                    })
                      .then((resp) => resp.json())
                      .then((commentsFromServer) =>
                        setComments(commentsFromServer)
                      );
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
