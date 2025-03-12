import { useState } from "react";
import Button from "../../component/ui/buttons/Button";
import Input, { Select, TextArea } from "../../component/ui/input/Input";
import "./add-article.css";

const AddArticle = () => {
  const categories = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Culture" },
  ];

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [contenu, setContenu] = useState("");
  const [erreur, setErreur] = useState({});

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

  const required = (formData, name) => {    
    if (!formData.get(name)) {
      return `Le champs ${name} est obligatoire`
    }
  }

  const validateInput = (formData) => {
    let errors = {};
    
    errors.fullname = required(formData, 'fullname');
    errors.email = required(formData, 'email');
    errors.telephone = required(formData, 'telephone');
    errors.title = required(formData, 'title');
    errors.author = required(formData, 'author');
    errors.category = required(formData, 'category');
    errors.content = required(formData, 'content');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.get('email'))) {
      errors.email = "Format adresse mail invalide";
    }

    if (formData.get('telephone').length > 9) {
      errors.telephone = "Format invalide"
    }
    

    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.get('category')
    const all_errors = validateInput(formData); 

    if (Object.keys(all_errors).length > 0) {      
      setErreur(all_errors);
      return;
    }

    
  }

  return (
    <div className="form-body">
      <h1 className="form-title">Rédiger votre article</h1>
      <form onSubmit={handleSubmit}>
        <h2>Infos de l'écrivain</h2>
        <div className="form-group">
          <Input
            label="Prénom & Nom"
            type="text"
            name="fullname"
            placeholder="Ex. Samba Diop"
            error={erreur}
          />
        </div>
        <div className="form-group">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Ex. sambadiop@exemple.com"
            error={erreur}
          />
        </div>
        <div className="form-group">
          <Input
            label="Téléphone"
            type="text"
            name="telephone"
            placeholder="Ex. 7x XXX XX XX"
            error={erreur}
          />
        </div>
        <hr />
        <h2>Infos Post</h2>
        <div className="form-group">
          <Input
            label="Titre de l'article"
            type="text"
            name="title"
            placeholder="Donnez le titre de votre article"
            onChangeValue={handleInputTitle}
            error={erreur}
          />
        </div>
        <div className="form-group">
          <Input
            label="Auteur de l'article"
            type="text"
            name="author"
            placeholder="Donnez le om de l'auteur"
            onChangeValue={handleInputAuthor}
            error={erreur}
          />
        </div>

        <div className="form-group">
          <Select
            label="Catégoie"
            name="category"
            option={categories}
            select={handleSelect}
            error={erreur}
          />
        </div>
        <div className="form-group">
          <TextArea
            label="Contenu de l'article"
            name="content"
            onChangeValue={handleContent}
            error={erreur}
          />
        </div>

        <div className="form-group">
          <Button className="btn" name="Enregistrer" />
        </div>
      </form>
      <h2>Les infos de l'article</h2>
      <ul>
        <li>Titre : {title} </li>
        <li>Auteur : {author} </li>
        <li>Categorie : {category} </li>
        <li>Texte : {contenu} </li>
      </ul>
    </div>
  );
};

export default AddArticle;
