import Button from "../../component/ui/buttons/Button";
import Input, { Select, TextArea } from "../../component/ui/input/Input";

const AddArticle = () => {
  const categories = [
    {id: 1, name: "Sport"},
    {id: 2, name: "Culture"},
  ];
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
          />
        </div>

        <div>
          <Select label="Catégoie" name="category" option={categories}/>
        </div>
        <div>
          <TextArea label="Contenu de l'article" name="content"/>
        </div>

        <div>
          <Button name="Enregistrer" />
        </div>
      </form>
    </>
  );
};

export default AddArticle;
