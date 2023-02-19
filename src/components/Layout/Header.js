import { Connect } from '../Connect';
import './layout.css';

const Header = () => {
  return(
    <>
    <div className='header'>
      BonMedia - Web3
      <Connect />
    </div>
    </>
  )
}

export default Header;