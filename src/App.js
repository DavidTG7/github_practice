import Greet from "./components/Greet";
import ParrafoRed from './components/Parrafo'
import BlueParagraph from "./components/BluePraragraph";

const name = prompt("What is your name? ")

function App() {
  return (
    <div>
      <Greet 
        name={name}
      />
      <ParrafoRed />
      <BlueParagraph />

    </div>);
}

export default App;
