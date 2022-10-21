import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

type Category = {
  id: number;
  name: string;
};



export function Genres() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:2222/genres")
      .then((resp) => resp.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header  />
        <ul className="categories-ul">
          {categories.map((category) => (
            <>
              <li className="categories-li">
                <Link to={`/genres/${category.id}`} className="movie-title" key={category.id}>
                  {category.name}
                </Link>
                
              </li>
            </>
          ))}
        </ul>

       
      </div>
    </>
  );
}
