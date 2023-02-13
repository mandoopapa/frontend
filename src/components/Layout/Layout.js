import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './bootstrap.css';
import { SignMessage } from '../SignMessage';
import { WalletStatus } from '../WalletStatus';
import News from '../News';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container'>
				<News />
				<br />
				<div className='container'>
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