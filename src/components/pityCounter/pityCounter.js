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

const bannerCharacters = [
  {
    id: "1",
    name: "Dehya",
  },
  {
    id: "2",
    name: "Diluc",
  },
  {
    id: "3",
    name: "Jean",
  },
  {
    id: "4",
    name: "Keqing",
  },
  {
    id: "5",
    name: "Mona",
  },
  {
    id: "6",
    name: "Qiqi",
  },
  {
    id: "7",
    name: "Tighnari",
  },
];

const PityCounter = (props) => {
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [dataPity, setDataPity] = useState({
    pity4Stars: 0,
    pity5Stars: 0,
  });

  const addWishHandler = (wish) => {
    // Atualize os contadores de Pity
    if (wish.star === "4*") {
      setDataPity((prevDataPity) => ({
        ...prevDataPity,
        pity4Stars: 0,
      }));
    } else if (wish.star === "5*") {
      setDataPity((prevDataPity) => ({
        ...prevDataPity,
        pity5Stars: prevDataPity.pity5Stars + 1,
      }));
      if (bannerCharacters.some((character) => character.name === wish.name)) {
        // O personagem 5 estrelas obtido faz parte do banner
        console.log(
          `Você obteve o personagem do banner: ${wish.name} está garantido!`,
        );
      }
    }

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
          <DataPity dataPity={dataPity}/>
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
