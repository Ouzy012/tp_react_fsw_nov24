import { NavLink } from "react-router";
import './nav.css';

const Nav = () => {
  return (
    <header>
      <div className="container">
        <h1>Mon Blog</h1>
        <nav>
          <ul>
            <li>
              <a href="" >Accueil</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <NavLink to="/rediger-article">Rédiger un article</NavLink>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
