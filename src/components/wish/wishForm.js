import React, { useState } from "react";

import "./wishForm.css";

const WishForm = (props) => {
  //adding props
  const [enteredName, setEnteredName] = useState("");
  const [selectedStar, setSelectedStar] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [selectedBanner, setSelectedBanner] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value); //storing the state
  };
  const starChangeHandler = (event) => {
    setSelectedStar(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const bannerChangeHandler = (event) => {
    setSelectedBanner(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //don't update the page after sending the data

    const wishData = {
      name: enteredName,
      star: selectedStar,
      date: new Date(enteredDate),
      banner: selectedBanner,
    };

    console.log(wishData);
    props.onSaveWishData(wishData); //passing the data to pityCounter
    setEnteredName("");
    setSelectedStar("");
    setEnteredDate("");
    setSelectedBanner("");
  };

  return (
    <form className="wish-form__controls" onSubmit={submitHandler}>
      <h3>Nova Oração:</h3>
      <div className="wish-form__control">
        <label>Nome: </label>
        <input 
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
         />
      </div>
      <div className="wish-form__control">
        <label>Estrelas: </label>
        <select required
            value={selectedStar}
            onChange={starChangeHandler}
        >
          <option value="3*">⭐⭐⭐</option>
          <option value="4*">⭐⭐⭐⭐</option>
          <option value="5*">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="wish-form__control">
        <label>Data: </label>
        <input required 
            type="date" 
            value={enteredDate}
            onChange={dateChangeHandler}
        />
      </div>
      <div className="wish-form__control">
        <label>Banner: </label>
        <select required
            value={selectedBanner}
            onChange={bannerChangeHandler}
        >
          <option value="arma">Arma</option>
          <option value="personagem">Personagem</option>
          <option value="comum">Comum</option>
        </select>
      </div>
      <div className="wish-form__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="subimt">Add New Wish</button>
      </div>
    </form>
  );
};

export default WishForm;
