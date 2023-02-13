import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { injected } from "../utils/connectors"
import { useInactiveListener, useWeb3Connect } from "../utils/hooks"
import { NoEthereumProviderError, UserRejectedRequestError } from "@web3-react/injected-connector";
import { Button } from "react-bootstrap";

// 활성화
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
    <Button variant="primary" disabled={active} 
    style={{
      borderColor: activating ? 'orange' : active ? 'unset' : 'green'
    }}
    onClick={handleActivate}>Wallet Connect</Button>
  )
}

// 비활성화
const Deactivate = () => {
  const context = useWeb3React()
  const { deactivate, active } = context

  const handleDeactivate = (event) => {
    event.preventDefault();

    deactivate();
  }

  return (
    <Button variant="danger" disabled={!active} 
    style={{
      borderColor: active ? 'red' : 'unset'
    }}
    onClick={handleDeactivate}>Disonnect</Button>
  )
}

// 에러메시지. web3react injected-connector에서 제공되는 것 그대로 사용.. 아래의 Connect()에서 alert에 오류 메시지 띄우기로 사용
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


// 연결. jsx에는 하나의 pragment. <></> 아래에 하나씩 생성.
export function Connect() {
  const { error } = useWeb3React()

  if (error) {
    window.alert(getErrorMessage(error))
  }

  return (
    <>
    <Activate />
    <Deactivate />
    </>
  )
}