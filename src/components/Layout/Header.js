import { Connect } from '../Connect';
import './layout.css';
import Logo from './bonlogo.png';

const Header = () => {
  return(
    <>
    <div className='header'>
      <img src={Logo} alt="BonLogo"></img>
      <Connect />
    </div>
    </>
  )
}

export default Header;