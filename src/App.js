import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200" height="200" />
        <p>
          Test test test <br/>
          <img src="tm.png" alt="let's gooooo" width="470" height="470"/>
        </p>
        <a
            className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
