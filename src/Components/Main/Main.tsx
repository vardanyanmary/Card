import { Component, FC } from "react";
import "./Main.css";
import Card from "../Card/Card";

export interface CardState {
  id: number;
  number: number;
}

interface MainProps {
  cards: CardState[];
  handleDelete: (id: number) => void;
}

export const Main: FC<MainProps> = ({ cards, handleDelete }) => {
  return (
    <div className="Main">
      {cards.map((card) => (
        <Card
          key={card.id}
          number={card.number}
          onDelete={() => handleDelete(card.id)}
        />
      ))}
    </div>
  );
};

