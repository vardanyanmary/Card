import { FC } from "react";
import cls from "./Card.module.scss";

interface CardProps {
  number: number;
  onDelete: () => void;
}

const Card: FC<CardProps> = ({ number, onDelete }) => {
  return (
    <div className={cls.card}>
      <div className={cls.Icon}>
        <button className={cls.deleteBtn} onClick={onDelete}>
          {" "}
          X{" "}
        </button>
      </div>
      <div className={cls.cardContent}>
        <p className={cls.Number}>{number}</p>
      </div>
    </div>
  );
};

export default Card;
