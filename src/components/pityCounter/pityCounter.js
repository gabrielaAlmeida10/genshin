import React, { useState } from "react";

import NewWish from "../wish/newWish";

import "./pityCounter.css";
import HistoricWish from "../wish/historicWish";

const INITIAL_WISHES = [
  {
    id: "1",
    name: "Guia de Magia",
    star: "4*",
    date: new Date(2020, 7, 14),
    banner: "",
  },
  { 
    id: "2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const PityCounter = (props) => {
  const [wishes, setWishes] = useState(INITIAL_WISHES);

  const addWishHandler = (wish) => {
    setWishes((prevWish) => {
      return [wish, ...wishes];
    });
  };

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
        <HistoricWish items={wishes} />
      </div>
    </div>
  );
};

export default PityCounter;
