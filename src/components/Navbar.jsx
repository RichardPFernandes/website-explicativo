import './Navbar.css';
import logo from './img/logo.png';

function Navbar() {
    return (
      <>
        <div className='navbar'>
          <div className='logo'>
            <a className='nomeLogo'>Stack </a>
            <img className='imagem' src={logo} alt="Logo" />
          </div>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap');
          </style>
        </div>
      </>
    );
}

export default Navbar;