

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import {  Genres } from "./pages/Genres";
import {  Genre } from "./pages/Genre";

import { Home } from "./pages/Home";
import { Song } from "./pages/Song";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:id" element={<Genre />} />
        <Route path="/songs/:id" element={<Song />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      
       
      </Routes>
    </div>
  );
}

export default App;
