import { Outlet } from "react-router";
import "./App.css";
import Footer from "./component/layouts/footer/Footer";
import Nav from "./component/layouts/nav/Nav";
import Article from "./component/ui/article/Article";

const App = () => {
  const articles = [
    {
      title: "Titre 1",
      resume: "Voici un résumé de l'article",
      slug: "",
    },
    {
      title: "Titre 1",
      resume: "Voici un résumé de l'article",
      slug: "",
    },
    {
      title: "Titre 1",
      resume: "Voici un résumé de l'article",
      slug: "",
    },
    {
      title: "Titre 1",
      resume: "Voici un résumé de l'article",
      slug: "",
    },
  ];
  return (
    <>
      {/* Barre de navigation ici */}
      <Nav />

      <main className="container">
        <section className="intro">
          <h2>Bienvenue sur Mon Blog</h2>
          <p>
            Ce blog est dédié à partager des idées, des conseils et des
            réflexions sur divers sujets. Explorez mes articles et n'hésitez pas
            à me contacter pour toute question ou suggestion.
          </p>
        </section>

        <section className="recent-posts">
          <h2>Articles Récents</h2>
          {articles.map((value, key) => (
            <Article
              key={key}
              title={value.title}
              resume={value.resume}
              slug={value.slug}
            />
          ))}
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default App;
