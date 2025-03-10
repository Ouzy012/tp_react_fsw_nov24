import { NavLink } from "react-router";
import "./article.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../env";

const Article = ({ title, resume, userId, idArticle }) => {
  const [view, setView] = useState(0);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser(userId);
  }, []);

  async function getUser(id) {
    await axios
      .get(`${apiUrl}/users/${id}`)
      .then((response) => {
        setUser({
          fullname: response.data.name,
          username: response.data.username,          
        });
        
      })
      .catch((error) => {
        //console.log("erreur", error);
      })
      .finally((err) => {
        setLoading(false);
      });
  }

  return (
    <article>
      {loading ? (
        <span>En cours de chargement</span>
      ) : (
        <>
          <h3>{title}</h3>
          <span>
            Article de {user.fullname} @{user.username}{" "}
          </span>{" "}
          <br />
          <span>Lu {view} fois</span>
          <p> {resume} </p>

          {/* <NavLink onClick={compterLecture} href="#">
            Commencer la lecture
          </NavLink> */}
          <NavLink to={`/lire-article/${idArticle}`}>
            Commencer la lecture
          </NavLink>
        </>
      )}
    </article>
  );
};

export default Article;
