const Input = ({ label, type, name, placeholder, required = true }) => {
  return (
    <>
      <label> {label} </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;

export const Select = ({ label, name, option }) => {
  return (
    <>
      <label> {label} </label>
      <select name={name}>
        <option value="">Selectionnez une catégorie</option>
        {option.map((value) => (
          <option key={value.id} value={value.name}>
            {" "}
            {value.name}{" "}
          </option>
        ))}
      </select>
    </>
  );
};

export const TextArea = ({ label, name }) => {
  return (
    <>
      <label> {label} </label>
      <textarea cols="5" rows="5" name={name}></textarea>
    </>
  );
};
