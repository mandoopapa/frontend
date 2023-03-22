import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { injected } from "../utils/connectors"
import { useInactiveListener, useWeb3Connect } from "../utils/hooks"
import { NoEthereumProviderError, UserRejectedRequestError } from "@web3-react/injected-connector";
import './Layout/layout.css';

// Wallet Connect Button -> if wallet connected, it will be disable to click and change its color. 
const Activate = () => {
  const context = useWeb3React()
  const { activate, active } = context;
  const [activating, setActivating] = useState(false)

  const handleActivate = (event) => {
    event.preventDefault();

    async function _activate() {
      setActivating(true);
      await activate(injected);
      setActivating(false);
    }
    _activate()
  }

  const eagerConnectionSuccessful = useWeb3Connect();
  useInactiveListener(!eagerConnectionSuccessful);

  return (
    <button className="button" disabled={active}
    onClick={handleActivate}>{active ? 'Wallet Connected' : 'Click here to Connect Wallet'}</button>
  )
}

// Wallet Disconnect Button -> if wallet disconnected, it will be disable to click and change its color.
const Deactivate = () => {
  const context = useWeb3React()
  const { deactivate, active } = context

  const handleDeactivate = (event) => {
    event.preventDefault();

    deactivate();
  }

  return (
    <button className="button" disabled={!active} 
    onClick={handleDeactivate}>{!active ? 'Not Connected' : 'Tab to Disconnect'}</button>
  )
}

// Error Message. just use from web3react injected-connector. Error message will be alert in Connect function.
function getErrorMessage(error) {
  let errorMessage;

  switch (error.constructor) {
    case NoEthereumProviderError:
      errorMessage = `No Ethereum browser extension detected. Please install MetaMask extension`;
      break;
    case UnsupportedChainIdError:
      errorMessage = `You're connected to an unsupported network`;
      break;
    case UserRejectedRequestError:
      errorMessage = `Please authorize this website to access your Ethereum account.`;
      break;
    default:
      errorMessage = error.message;
  }
  return errorMessage;
}

// Connect function has two components which is Activate, Deactivate
export function Connect() {
  const { error } = useWeb3React()

  if (error) {
    window.alert(getErrorMessage(error))
  }

  return (
    <div className="nav">
      <Activate />
      <Deactivate />
    </div>
  )
}

// Memo
// 02.18 -> Want to make it? ->> If user click Connect button(or Wallet Icon), shows Modal for Metamask login. and after connected wallet, Connect Button disappears. (for example, Pala Square Login function...)