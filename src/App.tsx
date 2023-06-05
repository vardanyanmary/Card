import Footer from "./Components/Footer/Footer";
import Header, {
  HeaderProps,
  handleAddCard,
  handleSortCard,
} from "./Components/Header/Header";
import Instruction from "./Components/Instruction/Instruction";
import { Main } from "./Components/Main/Main";
import { useState } from "react";
import cls from "./App.module.scss";

interface CardState {
  id: number;
  number: number;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<CardState[]>([]);

  const handleDeleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const headerProps: HeaderProps = {
    addCard: () => handleAddCard(cards, setCards),
    sortCard: () => handleSortCard(cards, setCards),
  };

  return (
    <div className={cls.App}>
      <div className={cls.main}>
        <Header {...headerProps} />
        <Main cards={cards} handleDelete={handleDeleteCard} />
        <Footer />
      </div>
      <Instruction className={cls.Instruction} />
    </div>
  );
};

export default App;
