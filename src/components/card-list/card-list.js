import React from "react";

import Card from "../card";

import "./card-list.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.key} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
