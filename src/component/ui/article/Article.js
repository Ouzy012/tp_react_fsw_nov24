import { NavLink } from "react-router";
import "./article.css";
import { useState } from "react";

const Article = ({ title, resume, slug }) => {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState(0);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const compterLecture = () => setView(view + 1);
  return (
    <article>
      {loading ? (
        <span>En cours de chargement</span>
      ) : (
        <>
          <h3>{title}</h3>
          <span>Lu {view} fois</span>
          <p> {resume} </p>
          <NavLink href="#">Lire la suite</NavLink>{" "}
          {/* <NavLink onClick={compterLecture} href="#">
            Commencer la lecture
          </NavLink> */}
          <NavLink onClick={() => setView(view + 1)} href="#">
            Commencer la lecture
          </NavLink>
        </>
      )}
    </article>
  );
};

export default Article;
