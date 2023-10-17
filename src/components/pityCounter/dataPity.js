import React from "react";

const DataPity = ({ dataPity }) => {
  return (
    <div>
      <h3>Contador de Pity</h3>
      <p>Pity 4 estrelas: {dataPity.pity4Stars}</p>
      <p>Pity 5 estrelas: {dataPity.pity5Stars}</p>
      {/* Exiba o nome dos últimos personagens 4 estrelas e 5 estrelas aqui */}
    </div>
  );
};

export default DataPity;
