import './Header.css';
import {Link} from 'react-router-dom'
import logo from '../../img/logo.svg'
import Menu from '../Menu/Menu';
import Button from '../Button/Button';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Link to="/" className='Logo'>
            <img src={logo} alt="" />
          </Link>
          <Menu />
          <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;