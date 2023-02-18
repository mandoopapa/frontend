import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { SignMessage } from '../SignMessage';
import { WalletStatus } from '../WalletStatus';
import News from '../News';

// Delete Bootstrap. Create a CSS on my own
const Layout = () => {
  return (
    <>
      <Header />
      <div>
				<News />
				<br />
				<div>
				<p>
					Connected Wallet Status
				</p>
					<WalletStatus />
				</div>
				
				<SignMessage />
      
			</div>
      <Footer />
    </>
  )
}

export default Layout;