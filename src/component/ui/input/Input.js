import { useState } from "react";
import "./input.css";

const Input = ({ label, type, name, placeholder, onChangeValue, error }) => {
  return (
    <>
      <label> {label} </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChangeValue}
      />
      {error[name] && <span style={{ color: "red" }}> {error[name]} </span>}
    </>
  );
};

export default Input;

export const Select = ({ label, name, option, select, error }) => {
  return (
    <>
      <label> {label} </label>
      <select name={name} onChange={select}>
        <option value="">Selectionnez une catégorie</option>
        {option.map((value) => (
          <option key={value.id} value={value.name}>
            {" "}
            {value.name}{" "}
          </option>
        ))}
      </select>
      {error[name] && <span style={{ color: "red" }}> {error[name]} </span>}
    </>
  );
};

export const TextArea = ({ label, name, onChangeValue, error }) => {
  const [count, setCount] = useState(0)
  function countWord(event) {
    const textArray = event.target.value;
    setCount(textArray.split(" ").length - 1);
    
  }
  return (
    <>
      <label> {label} </label>
      <textarea
        cols="5"
        rows="5"
        name={name}
        onChange={countWord}
      ></textarea>
      <div className="count-word">
        <span> {count > 1 ? `nombre de mots` : 'nombre de mot'} : {count} </span>
      </div>

      {error[name] && <span style={{ color: "red" }}> {error[name]} </span>}
    </>
  );
};
