import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";

export function Song() {
  const [song, setSong] = useState();

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:2222/songs/${params.id}`)
      .then((resp) => resp.json())
      .then((song) => setSong(song));
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header />
        <div className="movie-details ">
          <img src={song?.image} className="image2"></img>
          <iframe src={song?.source} frameborder="0"></iframe>
          <h2 className="title2">{song?.title}</h2>
          <button className="sign-button1">Add to playlist</button>
          <button className="sign-button1">Like</button>
        </div>
      </div>
    </>
  );
}
