import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';

function App() {
  return (
    <div className="App">
      <header className="App-header flex-center flex-spacebetween">
        <div className="logo flex-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Universitets Bøger</h1>
        </div>
        <div className="header-menu">
          <ul className="flex-center">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          </ul>
        </div>
      </header>

      <div className="container">
      <Customers />
      </div>
    </div>
    
  );
}

export default App;