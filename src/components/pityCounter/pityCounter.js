import React, { useState } from "react";

import NewWish from "../wish/newWish";
import HistoricWish from "../wish/historicWish";
import DataPity from "./dataPity";

import "./pityCounter.css";

const INITIAL_WISHES = [
  {
    id: "1",
    name: "Guia de Magia",
    star: "3*",
    date: new Date(2023, 9, 22),
    banner: "Personagem",
  },
  {
    id: "2",
    name: "Juramento de Sargitári0",
    star: "3*",
    date: new Date(2023, 9, 23),
    banner: "Personagem",
  },
  {
    id: "3",
    name: "Espadão Sangrento",
    star: "3*",
    date: new Date(2023, 9, 26),
    banner: "Personagem",
  },
  {
    id: "4",
    name: "Arco de Corvo",
    star: "3*",
    date: new Date(2023, 9, 27),
    banner: "Personagem",
  },
  {
    id: "5",
    name: "Diona",
    star: "4*",
    date: new Date(2023, 9, 27),
    banner: "Personagem",
  },
  {
    id: "6",
    name: "Arco de Corvo",
    star: "3*",
    date: new Date(2023, 9, 27),
    banner: "Personagem",
  },
  {
    id: "7",
    name: "Espada do Cavaleiro do Céu",
    star: "3*",
    date: new Date(2023, 9, 27),
    banner: "Personagem",
  },
  {
    id: "8",
    name: "Espada do Cavaleiro do Céu",
    star: "3*",
    date: new Date(2023, 9, 28),
    banner: "Personagem",
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
      <div className="top-row">
        <div className="wish-form">
          <NewWish onAddWish={addWishHandler} />
        </div>
        <div className="data-pity">
          <DataPity items={wishes} />
        </div>
      </div>
      <div className="history">
        <h3>Histórico de Orações:</h3>
        <HistoricWish items={wishes} />
      </div>
    </div>
  );
};

export default PityCounter;
