import cls from "./Header.module.scss";
import { CardState } from "../Main/Main";

export interface HeaderProps {
  addCard: () => void;
  sortCard: () => void;
}
export const handleAddCard = (
  cards: CardState[],
  setCards: React.Dispatch<React.SetStateAction<CardState[]>>
) => {
  const newCards = {
    id: Math.random(),
    number: Math.floor(Math.random() * 1000),
  };
  setCards((prevState) => [...prevState, newCards]);
};

export const handleSortCard = (
  cards: CardState[],
  setCards: React.Dispatch<React.SetStateAction<CardState[]>>
) => {
  const sortedCards = [...cards].sort(
    (smallerNumber, biggerNumber) => smallerNumber.number - biggerNumber.number
  );
  setCards(sortedCards);
};

const Header: React.FC<HeaderProps> = ({ addCard, sortCard }) => {
  return (
    <div className={cls.header}>
      <div>
        <button onClick={addCard} className={cls.button}>
          Add Card
        </button>
        <button onClick={sortCard} className={cls.button}>
          Sort Cards
        </button>
      </div>
    </div>
  );
};

export default Header;
