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
  name: string;
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
  
  function createNewMovie (event: any){let newMovie = {
    id: Math.floor(Math.random()*100),

    movieId: Number(event.target.movieId.value),
    name: event.target.name.value,
    content: event.target.content.value,
  }
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
                
                body: JSON.stringify(newMovie),
              })
                .then((resp) => resp.json())
                .then((newMovie) => setComments([...comments, newMovie]));
            }}
          >
            
            <input
              type="text"
              name="movieId"
              className="search"
              placeholder="movieId"
            />
            <input
              type="text"
              name="name"
              className="search"
              placeholder="Name"
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
                <h3>{comment.name}</h3>
                <p className="review">- {comment?.content}</p>
                <button
                  className="delete-button"
                  onClick={() => {
                    
                    fetch(`http://localhost:4999/comments/${comment.id}`, {
                      method: "DELETE",
                    })
                      .then((resp) => resp.json())
                      const copyComments = structuredClone(comments)
                      let deletedComments = copyComments.filter(target => target.id !== comment.id)
                      setComments(deletedComments)
                      
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
  )
}
