import React from "react";

export const GifGridIItem = ({ title, url }) => {
  return (
    <div className="card">
      <img loading="lazy" src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
