import React, { useState } from "react";

import NewWish from "../wish/newWish";
import HistoricWish from "../wish/historicWish";
import DataPity from "./dataPity";

import "./pityCounter.css";

const INITIAL_WISHES = [
  {
    id: "1",
    name: "Guia de Magia",
    star: "⭐⭐⭐",
    date: new Date(2023, 9, 22),
    banner: "Personagem",
  },
  {
    id: "2",
    name: "Juramento de Sargitári0",
    star: "⭐⭐⭐",
    date: new Date(2023, 9, 23),
    banner: "Personagem",
  },
  {
    id: "3",
    name: "Espadão Sangrento",
    star: "⭐⭐⭐",
    date: new Date(2023, 9, 26),
    banner: "Personagem",
  },
  {
    id: "4",
    name: "Arco de Corvo",
    star: "⭐⭐⭐",
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
    star: "⭐⭐⭐",
    date: new Date(2023, 9, 27),
    banner: "Personagem",
  },
  {
    id: "7",
    name: "Espada do Cavaleiro do Céu",
    star: "⭐⭐⭐",
    date: new Date(2023, 9, 27),
    banner: "Personagem",
  },
  {
    id: "8",
    name: "Espada do Cavaleiro do Céu",
    star: "⭐⭐⭐",
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
  const [recent4Stars, setRecent4Stars] = useState([]);
  const [recent5Stars, setRecent5Stars] = useState([]);

  const addWishHandler = (wish) => {
    setWishes((prevWishes) => [wish, ...prevWishes]);

    if (wish.star === "⭐⭐⭐") {
      setDataPity((prevDataPity) => ({
        ...prevDataPity,
        pity4Stars: prevDataPity.pity4Stars + 1,
        pity5Stars: prevDataPity.pity5Stars + 1,
      }));
    } else if (wish.star === "⭐⭐⭐⭐") {
      setDataPity((prevDataPity) => ({
        ...prevDataPity,
        pity4Stars: 0,
        pity5Stars: prevDataPity.pity5Stars + 1,
      }));
      setRecent4Stars((prevRecent4Stars) => [wish.name, ...prevRecent4Stars.slice(0, 4)]);
    } else if (wish.star === "⭐⭐⭐⭐⭐") {
      setDataPity((prevDataPity) => ({
        ...prevDataPity,
        pity5Stars: 0,
        pity4Stars: prevDataPity.pity4Stars + 1,
      }));
      if (bannerCharacters.some((character) => character.name === wish.name)) {
        console.log(`Você obteve o personagem do banner: ${wish.name} está garantido!`);
      }
      setRecent5Stars((prevRecent5Stars) => [wish.name, ...prevRecent5Stars.slice(0, 4)]);
    }
  };

  return (
    <div className="pity-counter">
      <h2>Contador de Pity</h2>
      <div>
        <div className="wish-form">
          <NewWish onAddWish={addWishHandler} />
        </div>
        <div>
          <DataPity dataPity={dataPity} recent4Stars={recent4Stars} recent5Stars={recent5Stars} />
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