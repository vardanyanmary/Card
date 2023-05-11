import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Instruction from "./Components/Instruction/Instruction";
import Main from "./Components/Main/Main";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Main />
        <Footer />
      </div>
      <Instruction className="Instruction"/>
    </div>
  );
}

export default App;
