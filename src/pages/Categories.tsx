import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

type Category = {
  id: number;
  name: string;
};



export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:4999/categories")
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
                <Link to={`/categories/${category.id}`} className="movie-title" key={category.id}>
                  {category.name}
                </Link>
                <button
                  className="delete-button"
                  onClick={(event) => {
                    event.preventDefault();
                    fetch(`http://localhost:4999/categories/${category.id}`, {
                      method: "DELETE",
                    })
                      .then((resp) => resp.json())
                      .then((categories) =>
                        setCategories(categories)
                      );
                  }}
                >
                  <b>X</b>
                </button>
              </li>
            </>
          ))}
        </ul>

        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            fetch("http://localhost:4999/categories", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                id: Number(event.target.id.value),
                name: event.target.name.value,
              }),
            })
              .then((resp) => resp.json())
              .then((categories) =>
                setCategories(categories)
              
              );
            
          }}
        >
          <input type="text" name="id" className="search" placeholder="id" />
          <input
            type="text"
            name="name"
            className="search"
            placeholder="Category name"
          />

          <button className="post-button1">Add</button>
        </form>
      </div>
    </>
  );
}
