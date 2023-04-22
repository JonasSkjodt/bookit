import logo from './logo.svg';
import './headerNav.css';

const HeaderNav = () => {
    return (
      <div className="App-header flex-center flex-spacebetween">
        <div className="logo flex-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>BookIt</h1>
        </div>
        <div className="header-menu">
          <ul className="flex-center">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          </ul>
        </div>
      </div>
    );
  }

  
export default HeaderNav;