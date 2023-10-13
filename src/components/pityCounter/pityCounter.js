import React, { useState } from "react";

import NewWish from "../wish/newWish";

import "./pityCounter.css";

const PityCounter = (props) => {
  const [wishes, setWishes] = useState([]);
 
  const addWishHandler = wish => {
    setWishes((prevWish) => {
      return[wish, ...wishes];
    });
  }

  return (
    <div className="pity-counter">
      <h2>Contador de Pity</h2>
      <div className="wish-form">
        <NewWish onAddWish={addWishHandler} />
      </div>
      <div className="data-pity">
        <h3>Dados do Pity</h3>
        <div>Pity: 60</div>
        <div>Ultimo 5*:</div>
        <div>Prox 5* em: </div>
        <div>Ultimo 4*:</div>
        <div>Prox 4* em: </div>
      </div>
      <div className="history">
        <h3>Histórico de Orações:</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Estrelas</th>
              <th>Banner</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tr>
            <tr>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tr>
            <tr>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PityCounter;
