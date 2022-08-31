import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";

type movie = {
    id: number;
    title: string;
    categoryId: number;
    description: string;
    image: string;
  };


export function Category(){

    const [categoryMovies, setCategoryMovies] = useState<movie[]>([]);
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:4999/movies?categoryId=${params.itemId}`)
        .then((resp) => resp.json())
        .then((categoryMovies) => setCategoryMovies(categoryMovies));
    }, []);

    return(
        <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header  />
        <ul className="movies-ul">
        {categoryMovies.map((movie) => (
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
    )
}