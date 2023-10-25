import React from "react";

import "./dataPity.css";

const DataPity = ({ dataPity, recent4Stars, recent5Stars }) => {
  return (
    <div className="data-pity">
      <h3>Contador de Pity</h3>
      <div className="four-star">
        <p>Pity 4 estrelas: {dataPity.pity4Stars}</p>
        <p>Últimos 4 estrelas: {recent4Stars.join(", ")}</p>
      </div>
      <div className="five-star">
        <p>Pity 5 estrelas: {dataPity.pity5Stars}</p>
        <p>Últimos 5 estrelas: {recent5Stars.join(", ")}</p>
      </div>
    </div>
  );
};

export default DataPity;
