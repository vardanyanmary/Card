import { Component, FC, useState } from "react";
import Card from "../Card/Card";
import "./Header.css";

interface CardState {
  id: number;
  number: number;
}

class Header extends Component<{}, { cards: CardState[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { cards: [] };
  }

  add = () => {
    const newOnes = {
      id: Math.random(),
      number: Math.floor(Math.random() * 1000),
    };
    this.setState((prevState) => ({ cards: [...prevState.cards, newOnes] }));
  };

  sort = () => {
    const sortedOnes = [...this.state.cards].sort(
      (a, b) => a.number - b.number
    );
    this.setState({ cards: sortedOnes });
  };

  delete = (id: number) => {
    const deletedOnes = this.state.cards.filter((card) => card.id !== id);
    this.setState({ cards: deletedOnes });
  };

  render = () => {
    return (
      <div className="header">
        <h1>Card Application</h1>
        <div>
          <button onClick={this.add} className="button">
            Add Card
          </button>
          <button onClick={this.sort} className="button">
            Sort Cards
          </button>
        </div>
        <div className="Cards">
          {this.state.cards.map((card) => (
            <Card
              key={card.id}
              number={card.number}
              onDelete={() => this.delete(card.id)}
            />
          ))}
        </div>
      </div>
    );
  };
}

export default Header;
