import { Component } from "react";
import "./Header.css";

interface HeaderProps {
  addCard: () => void;
  sortCard: () => void;
}

class Header extends Component <HeaderProps> {
  render() {
    const { 
      addCard, 
      sortCard 
    } = this.props;

    return (
      <div className="header">
        <div>
          <button onClick = {addCard} className="button"> Add Card </button>
          <button onClick = {sortCard} className="button"> Sort Cards </button>
        </div>
      </div>
    );
  }
}

export default Header;
