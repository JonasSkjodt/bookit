import './App.css';
import Customers from './components/customers';
import HeaderNav from './components/headerNav';
import Footer from './components/footer';

function App() {
  return (

    <div className="App">
      <HeaderNav />
  
      <div className="container">
      <Customers />
      </div>

      <Footer/>
    </div>
    
  );
}

export default App;