

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Categories } from "./pages/Categories";
import { Category } from "./pages/Category";

import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:itemId" element={<Category />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/sign-in" element={<SignIn />} />
      
       
      </Routes>
    </div>
  );
}

export default App;
