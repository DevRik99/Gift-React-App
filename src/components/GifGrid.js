import React from "react";
import { useFecthGifts } from "../hooks/useFetchGifts.js";
import { GifGridIItem } from "./GifGridIItem.js";
export const GifGrid = ({ categoria }) => {
  const { data: images, loading } = useFecthGifts(categoria);
  return (
    <div className="card-container">
      {loading && <p>Cargando ...</p>}
      {images.length === 0 && <h3>No se encontraron resultados</h3>}
      {images.map((image) => {
        return <GifGridIItem key={image.id} {...image} />;
      })}
    </div>
  );
};
