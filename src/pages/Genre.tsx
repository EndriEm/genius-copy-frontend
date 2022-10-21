import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";



export function Genre(){

    const [genre, setGenre] = useState();
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:2222/genres/${params.id}`)
        .then((resp) => resp.json())
        .then((genre) => setGenre(genre));
    }, []);

    return(
        <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header  />
        <ul className="movies-ul">
        {genre?.songs.map((song: any) => (
            <li className="movies-li">
              <Link to={`/songs/${song.id}`}>
                <img src={song.image} className="image"></img>
                <h3 className="songtitle">{song.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
    )
}