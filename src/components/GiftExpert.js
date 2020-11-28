/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GiftExpert = () => {
  const [categorias, setcategorias] = useState(["X-Men", "Avengers", "DC"]);
  return (
    <div className="container">
      <h1>Gift App</h1>
      <AddCategory setcategorias={setcategorias} />
      <hr></hr>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <a href={"#" + categoria}>{categoria}</a>
          </li>
        ))}
      </ul>
      {categorias.map((categoria) => (
        <div key={categoria} className="container">
          <h3 className="categoria" id={categoria}>
            {categoria}
          </h3>
          <GifGrid categoria={categoria} />
        </div>
      ))}

      {/* <button onClick={handleAdd}>Agregar</button> */}
    </div>
  );
};
