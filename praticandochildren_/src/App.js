import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Kindergarden">
          <CenteredCard> 1</CenteredCard>
          <CenteredCard> 2</CenteredCard>
          <CenteredCard> 3</CenteredCard>
        </div>
      </div>
    </div>
  );
}

export default App;
