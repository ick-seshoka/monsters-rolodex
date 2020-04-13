import React from "react";

import "./card.css";

const card = (props) => {
  const { id, name, email } = props.monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}/set=set2&size='80x80'`}
        alt="monster"
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default card;
