//import "bootstrap/dist/css/bootstrap.css";
//import logo from "./logo.svg";
import "./App.css";
import { Products } from "./products";
import llogo from "./llogo-removebg-preview.png";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={llogo} className="App-logo" alt="logo" />
          <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read something
          </a> */}
          <div className="ddiv">
            {Products.map((product) => (
              <div>
                <h1>{product.name}</h1>
                <img src={product.image} width="150" />
                <h2>{product.price}</h2>
              </div>
            ))}
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
