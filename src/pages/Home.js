import Article from "../component/ui/article/Article";

const Home = () => {
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
  );
};

export default Home;
