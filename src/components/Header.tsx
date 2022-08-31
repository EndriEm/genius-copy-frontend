import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ setSearch }: Props) {
  return (
    <div className="header-wrp">
      <h1 className="netflix">
        <b>NETFLIX</b>
      </h1>
      <Link to="/home">
        <h2 className="home">Home</h2>
      </Link>
      <Link to="/categories">
        <h2 className="categories">Categories</h2>
      </Link>
      <input
        type="search"
        placeholder="Search"
        className="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <a className="sign-button">
        <Link to="/sign-in">
          <button className="sign-button1">Sign In</button>
        </Link>
      </a>
    </div>
  );
}
