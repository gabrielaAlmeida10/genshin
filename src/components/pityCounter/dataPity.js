import React from "react";

const DataPity = ({ dataPity, recent4Stars, recent5Stars }) => {
  return (
    <div>
      <h3>Contador de Pity</h3>
      <p>Pity 4 estrelas: {dataPity.pity4Stars}</p>
      <p>Pity 5 estrelas: {dataPity.pity5Stars}</p>
      <p>Últimos 4 estrelas: {recent4Stars.join(", ")}</p>
      <p>Últimos 5 estrelas: {recent5Stars.join(", ")}</p>
    </div>
  );
};

export default DataPity;
