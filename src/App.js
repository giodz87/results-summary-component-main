import "./App.css";
import Result from "./Result";
import memory from "../src/img/icon-memory.svg";
import reaction from "../src/img/icon-reaction.svg";
import verbal from "../src/img/icon-verbal.svg";
import visual from "../src/img/icon-visual.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Result />
        <div className="box">
          <h2>Summary</h2>
          <div className="img-line back-first">
            <div className="line">
              <img src={reaction} />
              <p className="text">Reaction</p>
            </div>
            <p>
              <strong>80</strong> / 100
            </p>
          </div>
          <div className="img-line back-second">
            <div className="line">
              <img src={memory} />
              <p className="text">Memory</p>
            </div>
            <p>
              <strong>92</strong> / 100
            </p>
          </div>
          <div className="img-line back-third">
            <div className="line">
              <img src={verbal} />
              <p className="text">Verbal</p>
            </div>
            <p>
              <strong>61</strong> / 100
            </p>
          </div>
          <div className="img-line back-fourth">
            <div className="line">
              <img src={visual} />
              <p className="text">Visual</p>
            </div>
            <p>
              <strong>73</strong> / 100
            </p>
          </div>
          <button>Continue</button>
        </div>
      </header>
    </div>
  );
}

export default App;
