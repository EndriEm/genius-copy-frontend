import { useEffect, useState } from "react";
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
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header />
        <ul className="categories-ul">
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`}>
              <li className="categories-li">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
