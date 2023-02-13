import { useWeb3React } from "@web3-react/core";
import { Button } from "react-bootstrap";

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
		<Button variant="info" disable={!active ? true : false} onClick={handleSignMessage}>Sign Message</Button>
	)
}