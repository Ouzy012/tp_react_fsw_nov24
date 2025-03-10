import { useEffect, useState } from "react";
import Article from "../component/ui/article/Article";
import axios from "axios";
import { apiUrl } from "../env";

const Home = () => {  

  const [articles, setArticles] = useState([{}])

  useEffect(()=> {
    fetchArticles()
    
  }, [])

  const fetchArticles = async () => {
    //La liste des articles 
    await axios.get(`${apiUrl}/posts`)
    .then(response => {      
      setArticles(response.data);  
          
    })
    .catch(error => {
      console.log(error);
      
    })
    .finally(err => {

    })
  }

  return (
    <main className="container">
      <section className="intro">
        <h2>Bienvenue sur Mon Blog</h2>
        <p>
          Ce blog est dédié à partager des idées, des conseils et des réflexions
          sur divers sujets. Explorez mes articles et n'hésitez pas à me
          contacter pour toute question ou suggestion.
        </p>
      </section>

      <section className="recent-posts">
        <h2>Articles Récents</h2>
        {articles.map((value) => (
          <Article
            key={value.id}
            title={value.title}
            resume={value.body}
            userId={value.userId}
            idArticle={value.id}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
