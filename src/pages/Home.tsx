import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export type Song = {
  id: number;
  title: string;
  categoryId: number;
  description: string;
  image: string;
};

export function Home() {
  const [songs, setSongs] = useState<Song[]>([]);

  const [search, setSearch] = useState("")

  const searchSongs = songs.filter((song) => song.title.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:2222/songs")
      .then((resp) => resp.json())
      .then((songs) => setSongs(songs));
  }, []);

  

  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header setSearch={setSearch}/>
        <ul className="movies-ul">
          {searchSongs.map((song) => (
            <li className="movies-li">
              <Link to={`/songs/${song.id}`}>
                <img src={song.image} className="image"></img>
                <h3 className="movie-title">{song.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
    </>
  );
}
