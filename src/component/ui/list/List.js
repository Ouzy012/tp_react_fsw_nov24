import "./list.css";

const List = ({promo}) => {
  const listClasse = [
    { id: 1, firstname: "Mamadou", lastname: "Fall" },
    { id: 2, firstname: "Samba", lastname: "Diop" },
    { id: 3, firstname: "Fatou", lastname: "Fall" },
    { id: 4, firstname: "Awa", lastname: "Kane" },
    { id: 5, firstname: "Ibou", lastname: "Ndong" },
  ];
  return (
    <>
      <h1 className="title">Liste de la classe {promo}</h1>
      <ul>
        {listClasse.map((value, key) => (
          <li key={key}>
            {value.firstname} {value.lastname}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
