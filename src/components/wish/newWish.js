import React, { useState } from "react";

import "./newWish.css";
import WishForm from "./wishForm";

const NewWish = (props) => {
  const [isEdditing, setIsEdditing] = useState(false);

  const saveWishDataHandler = (enteredWishData) => {


    const wishData = {
      ...enteredWishData,
      id: Math.random().toString(),
    };

    props.onAddWish(wishData);
    setIsEdditing(false);
  };

  const startEdditingHandler = () => {
    setIsEdditing(true);
  };

  const stopEdditingHandler = () => {
    setIsEdditing(false);
  };

  return(
    <div className="new-wish">
      {!isEdditing && (
        <button onClick={startEdditingHandler}>Add New Wish</button>
      )}
      {isEdditing &&(
        <WishForm onSaveWishData={saveWishDataHandler}
        onCancel={stopEdditingHandler}/>
      )}
    </div>
  );
};

export default NewWish;
