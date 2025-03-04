import { NavLink } from "react-router";
import "./article.css";
import { useState } from "react";

const Article = ({ title, resume, slug }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return (
    <article>
      {loading ? (
        <span>En cours de chargement</span>
      ) : (
        <>
          <h3>{title}</h3>
          <p> {resume} </p>
          <NavLink href="#">Lire la suite</NavLink>
        </>
      )}
    </article>
  );
};

export default Article;
