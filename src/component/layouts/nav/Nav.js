import { NavLink } from "react-router";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
  const [mode, setMode] = useState(false);

  return (
    <header
      style={{
        backgroundColor: mode ? "#333" : "#fff",
        color: mode ? "#fff" : "#333",
      }}
    >
      <div className="container">
        <h1>Mon Blog</h1>
        <nav>
          <ul>
            <li>
              <NavLink style={{ color: mode ? "#fff" : "#333" }} to="#">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: mode ? "#fff" : "#333" }} to="#">
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: mode ? "#fff" : "#333" }}
                to="/rediger-article"
              >
                Rédiger un article
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: mode ? "#fff" : "#333" }} to="#">
                Contact
              </NavLink>
            </li>
            <button
              onClick={() => setMode(!mode)}
              style={{ backgroundColor: mode ? "#fff" : "#333", color: mode ? "#333" : "#fff" }}
              className="btn"
            >
              Mode {mode ? "sombre" : "clair"}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
