import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function SignIn() {
  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <Header />
        <div className="wrapper">
          <div className="section1-wrapper">
            <form>
              <h1 className="h1">Sign In</h1>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="input-GS"
                required
              />
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="input-GS"
                required
              />
              <input
                id="Password"
                name="password"
                type="password"
                placeholder="Password"
                className="input-GS"
                required
              />

              <button className="button-GS">
                <b>Sign In</b>
              </button>

              <p className="message">
                Not Registered?{" "}
                <Link to="/sign-up" className="signup">
                  SIGN UP
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
