import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Instruction from "./Components/Instruction/Instruction";
import { CardState, Main } from "./Components/Main/Main";
import "./App.css";
import { Component } from "react";

interface AppState {
  cards: CardState[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { cards: [] };
  }

  handleAddCard = () => {
    const newOnes = {
      id: Math.random(),
      number: Math.floor(Math.random() * 1000),
    };
    this.setState((prevState) => ({ cards: [...prevState.cards, newOnes] }));
  };

  handleSortCard = () => {
    const sortedOnes = [...this.state.cards].sort(
      (a, b) => a.number - b.number
    );
    this.setState({ cards: sortedOnes });
  };

  handleDeleteCard = (id: number) => {
    const deletedCard = this.state.cards.filter((card) => card.id !== id);
    this.setState({ cards: deletedCard });
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="App">
        <div className="main">
          <Header
            handleAddCard={this.handleAddCard}
            handleSortCard={this.handleSortCard}
          />
          <Main cards={cards} handleDelete={this.handleDeleteCard} />
          <Footer />
        </div>
        <Instruction className="Instruction" />
      </div>
    );
  }
}
export default App;
