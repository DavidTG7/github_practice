import Greet from "./components/Greet";
import ParrafoRed from './components/Parrafo'

const name = prompt("What is your name? ")

function App() {
  return (
    <div>
      <Greet 
        name={name}
      />
      <ParrafoRed />

    </div>);
}

export default App;
