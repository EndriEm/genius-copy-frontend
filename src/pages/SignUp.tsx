import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <>
      <div className="overlay"></div>
      <div className="content-above-overlay">
        <div className="wrapper">
          <div className="section1-wrapper">
            <form>
              <h1 className="h1">Sign Up</h1>
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
              />

              <button className="button-GS">
                <b>Register</b>
              </button>
              <p className="message">
                Registered?{" "}
                <Link to="/sign-in" className="signup">
                  SIGN IN
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
