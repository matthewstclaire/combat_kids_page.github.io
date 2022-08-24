import "./App.css";
import AppRouter from "../components/AppRouter";
import Logo from "../public/main-logo.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar-main">
        <p>
          <a href="http://127.0.0.1:5173/home">
            <img className="main-logo" src={Logo} />
          </a>
        </p>
        <p>
          <a href="http://127.0.0.1:5173/first-weeks">First Weeks</a>
        </p>
        <p>
          <a href="http://127.0.0.1:5173/white-to-gray-curriculum">
            White to Gray
          </a>
        </p>
        <p>
          <a href="http://127.0.0.1:5173/helpful-links">Helpful Links</a>
        </p>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
