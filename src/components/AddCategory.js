import React, { useState } from "react";

export const AddCategory = ({ setcategorias }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setcategorias((item) => {
      if (item.includes(input)) {
        return item;
      }
      if (input.trim().length > 0) {
        return [input, ...item];
      }
      return item;
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleChange}></input>
      <button type="submit">Agregar</button>
    </form>
  );
};
