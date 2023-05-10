import { FC } from "react";
import "./Card.css";

interface CardProps {
  number: number;
  onDelete: () => void;
}

const Card: FC<CardProps> = ({ number, onDelete }) => {
  return (
    <div className="card">
    <div className="Icon">
      <button className="deleteBtn" onClick={onDelete}> X </button>
    </div>
    <div className="cardContent">
      <p className="Number">{number}</p>
    </div>
  </div>
  );
};

export default Card;
