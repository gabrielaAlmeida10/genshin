import React from "react";

import "./historicWish.css";

const HistoricWish = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Estrelas</th>
            <th>Data</th>
            <th>Banner</th>
          </tr>
        </thead>
        <tbody className="stars">
          {props.items.map((wish) => (
            <tr key={wish.id}>
              <td>{wish.name}</td>
              <td>{wish.star}</td> 
              <td>{wish.date.toDateString()}</td>
              <td>{wish.banner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricWish;
