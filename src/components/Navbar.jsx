import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
    return (
      <>
        <div className='navbar'>
          <div className='logo'>
            <a className='nomeLogo'>Stack </a>
            <img className='imagem' src={logo} alt="Logo" />
          </div>
        </div>
      </>
    );
}

export default Navbar;