import { Component, FC, useState } from "react";
import Card from "../Card/Card";
import "./Header.css";

interface HeaderProps {
  handleAddCard: () => void;
  handleSortCard: () => void;
}

class Header extends Component<HeaderProps> {
  render() {
    const { 
      handleAddCard, 
      handleSortCard 
    } = this.props;

    return (
      <div className="header">
        <div>
          <button onClick={handleAddCard} className="button">
            Add Card
          </button>
          <button onClick={handleSortCard} className="button">
            Sort Cards
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
