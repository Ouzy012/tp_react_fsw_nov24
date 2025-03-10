import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiUrl } from "../../env";

const GetArticle = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([{}]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComment, setLoadingComment] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getArticleById();
    getCommentsPost();
  }, []);

  const getArticleById = async () => {
    await axios
      .get(`${apiUrl}/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {})
      .finally((e) => setLoadingPost(false));
  };
  async function getCommentsPost() {
    await axios
      .get(`${apiUrl}/posts/${id}/comments`)
      .then((response) => {
        console.log(response.data);

        setComments(response.data);
      })
      .catch((error) => {})
      .finally((e) => setLoadingComment(false));
  }
  return (
    <section className="recent-posts">
      <h1>Details de l'article {id}</h1>
      <article>
        {loadingPost ? (
          <span>Chargement de l'article</span>
        ) : (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}

        <h5>Les commentaires de l'articles</h5>
        {comments.map((value) => (
          <>
            {loadingComment ? (
              <span>Chargement de l'article</span>
            ) : (
              <>
                <span>
                  {" "}
                  commentaire de <strong>{value.email}</strong>{" "}
                </span>
                <p> {value.body} </p>
              </>
            )}
          </>
        ))}
      </article>
    </section>
  );
};

export default GetArticle;
