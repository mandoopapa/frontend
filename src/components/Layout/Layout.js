import Footer from './Footer';
import Header from './Header';
import { WalletStatus } from '../WalletStatus';
import News from '../News';
import './layout.css';
import { Introduction } from '../Introduction';

// Delete Bootstrap. Create a CSS on my own
const Layout = () => {
  return (
    <>
      <Header />
			<div className='body'>
				<Introduction />

				<News />
				<div className='status'>
					<span className='status-title'>
						Connected Wallet Status
					</span>
					<WalletStatus />
				</div>

			</div>

      <Footer />
    </>
  )
}

export default Layout;