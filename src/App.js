import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <CardContainer/>
      </div>
    </div>
  );
}

export default App;
