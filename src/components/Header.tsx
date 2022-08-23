export function Header() {
  return (
    <div className="header-wrp">
      <h1 className="netflix">
        <b>NETFLIX</b>
      </h1>
      <h2 className="home">Home</h2>
      <h2 className="categories">Categories</h2>
      <input type="search" placeholder="Search" className="search" />
      <a className="sign-button">
        <button className="sign-button1">Sign In</button>
      </a>
    </div>
  );
}
