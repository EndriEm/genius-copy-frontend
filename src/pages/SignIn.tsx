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
                id="email"
                type="email"
                placeholder="Email or phone number"
                className="input-GS"
              />
              <input
                id="Password"
                type="password"
                placeholder="Password"
                className="input-GS"
              />
              <a href="Sign-In.html">
                <button className="button-GS">
                  <b>Sign In</b>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
