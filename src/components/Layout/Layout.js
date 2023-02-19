import Footer from './Footer';
import Header from './Header';
import { SignMessage } from '../SignMessage';
import { WalletStatus } from '../WalletStatus';
import News from '../News';
import './layout.css';

// Delete Bootstrap. Create a CSS on my own
const Layout = () => {
  return (
    <>
      <Header />

			<News />

			<span>
				Connected Wallet Status
			</span>

			<WalletStatus />

			<SignMessage />

      <Footer />
    </>
  )
}

export default Layout;