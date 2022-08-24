import "./App.css";
import AppRouter from "../components/AppRouter";
import Logo from "../public/main-logo.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar-main">
        <a href="http://127.0.0.1:5173/home">
          <img className="main-logo" src={Logo} />
        </a>

        <button>
          <a href="http://127.0.0.1:5173/first-weeks">First Weeks</a>
        </button>

        <button>
          <a href="http://127.0.0.1:5173/white-to-gray-curriculum">
            White to Gray
          </a>
        </button>

        <button>
          <a href="http://127.0.0.1:5173/helpful-links">Helpful Links</a>
        </button>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
