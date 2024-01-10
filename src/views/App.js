import logo from './logo.svg';
import './App.scss';
import MyCom from './Example/MyCom';
/*
  2 components: class component/ function component(function, arrow)
  JSX : HTML inside JS
*/



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyCom/>

      </header>
    </div>
  );
}

export default App;
