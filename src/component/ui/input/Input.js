import { useState } from "react";

const Input = ({ label, type, name, placeholder, onChangeValue, required = true }) => {
  
  return (
    <>
      <label> {label} </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChangeValue}
      />
    </>
  );
};

export default Input;

export const Select = ({ label, name, option, select }) => {
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
    </>
  );
};

export const TextArea = ({ label, name, onChangeValue }) => {
  return (
    <>
      <label> {label} </label>
      <textarea cols="5" rows="5" name={name} onChange={onChangeValue}></textarea>
    </>
  );
};
