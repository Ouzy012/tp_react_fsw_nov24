import { useState } from "react";
import Button from "../../component/ui/buttons/Button";
import Input, { Select, TextArea } from "../../component/ui/input/Input";

const AddArticle = () => {
  const categories = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Culture" },
  ];

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [contenu, setContenu] = useState("");

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleInputAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleSelect = (event) => {
    setCategory(event.target.value);
  };
  const handleContent = (event) => {
    setContenu(event.target.value);
  };
  return (
    <>
      <h1>Rédiger votre article</h1>
      <form>
        <div>
          <Input
            label="Titre de l'article"
            type="text"
            name="title"
            placeholder="Donnez le titre de votre article"
            required={false}
            onChangeValue={handleInputTitle}
          />
        </div>
        <div>
          <Input
            label="Auteur de l'article"
            type="text"
            name="author"
            placeholder="Donnez le om de l'auteur"
            required={false}
            onChangeValue={handleInputAuthor}
          />
        </div>

        <div>
          <Select label="Catégoie" name="category" option={categories} select={handleSelect} />
        </div>
        <div>
          <TextArea label="Contenu de l'article" name="content" onChangeValue={handleContent} />
        </div>

        <div>
          <Button name="Enregistrer" />
        </div>
      </form>
      <h2>Les infos de l'article</h2>
      <ul>
        <li>Titre : {title} </li>
        <li>Auteur : {author} </li>
        <li>Categorie : {category} </li>
        <li>Texte : {contenu} </li>
      </ul>
    </>
  );
};

export default AddArticle;
