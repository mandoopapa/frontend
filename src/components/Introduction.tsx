// Introduction of BonMedia.
import React from "react";
import './Layout/layout.css'
import KU from './banner.jpg';

export function Introduction() {

	return (
		<>
			<div className='intro'>
				<h1>Support Reporter with Cryptocurrency</h1>
				<p></p>
				
				<div>
					<img src={KU} height="250px" alt='KU'></img> 
				</div>

				<div>
					<div className='intro_sub'>
						<h3>Meet BonMedia Directly with Web3!</h3>
						Donate crypto to journalists at Bonmedia, a media organization specializing in blockchain. It will help us write more quality articles.
						<br />
						You can donate in a variety of cryptocurrencies, such as Ethereum. Press the Donate ETH button below.
						<br />
						We are graduate students majoring in blockchain at the Korea University School of Information Security.
					</div>
				</div>

			</div>
		</>
	)
}