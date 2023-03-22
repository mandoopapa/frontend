/* eslint-disable react/no-unknown-property */
import { useWeb3React } from "@web3-react/core";
import './Layout/layout.css'

export function SignMessage() {
	const { account, active, library } = useWeb3React()

	const handleSignMessage = (event) => {
		event.preventDefault();

		if (!library || !account) {
			window.alert('Wallet is not connected')
			return;
		}

		async function signMessage() {
			try {
				const signature = await library.getSigner(account).signMessage('Hello Bro');
				window.alert(`Success! ${signature}`)
			}	catch (error) {
				console.error(error)
			}
		}
		signMessage()
	}

	return (
		<button className="button" disable={!active ? true : false} onClick={handleSignMessage}>Sign Message</button>
	)
}