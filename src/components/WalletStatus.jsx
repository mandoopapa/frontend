import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { ethers } from 'ethers'
import { ListGroup, ListGroupItem } from "react-bootstrap"

// 체인Id
function ChainId() {
  const { chainId } = useWeb3React()

  return (
    <div className="container">
      <ListGroup variant="flush">
      <ListGroupItem>Chain Id</ListGroupItem>
      <ListGroupItem>{chainId}</ListGroupItem>
      </ListGroup>
    </div>
  )
}

// BlockNumber 정보
function BlockNumber() {
  const { chainId, library } = useWeb3React();

  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if (!library) return;

    let stale = false;
    async function getBlockNumber() {
      try {
        const blockNumber = await library.getBlockNumber();
        if (!stale) {
          setBlockNumber(blockNumber)
        }
      } catch (error) {
      console.error(error)
      }
    }
    getBlockNumber()

    library.on('block', setBlockNumber)

    return () => {
      stale = true;
      library.removeListener('block', setBlockNumber);
      setBlockNumber(undefined)
    }
  }, [library, chainId])

  return (
    <div className="container">
      <ListGroup variant="flush">
        <ListGroupItem>Block Number</ListGroupItem>
        <ListGroupItem>{blockNumber}</ListGroupItem>
      </ListGroup>
    </div>
  )
}

// account 정보 중간에 ... 처리하고 뒷 4자리 표시
function Account() {
  const { account } = useWeb3React()

  return (
  <div className="container">
    <ListGroup variant="flush">
      <ListGroupItem>Account</ListGroupItem>
      <ListGroupItem>{account ? `${account.substring(0, 6)}...${account.substring(account.length-4)}` : ''}</ListGroupItem>
    </ListGroup>
  </div>
  )
}

// Balance 정보
function Balance() {
  const { account, library, chainId } = useWeb3React()
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (typeof account === 'undefined' || account === null || library) {
      return;
    }
    
    let stale = false;
    async function getBalance() {
      try {
        const balance = await library.getBalance(account);
        if (!stale) {
          setBalance(balance)
        }
      } catch (error) {
      console.error(error)
      }
    }
    getBalance()

    library.on('block', getBalance)

    return () => {
      stale = true;
      library.removeListener('block', getBalance)
      setBalance(undefined);
    }
  }, [account, library, chainId])

  return (
    <div className="container">
      <ListGroup variant="flush">
        <ListGroupItem>Balance</ListGroupItem>
        <ListGroupItem>{balance ? `${ethers.utils.formatEther(balance)} ETH` : ''}</ListGroupItem>
      </ListGroup>
    </div>
  )
}


export function WalletStatus() {
  return (
    <>
      <ChainId />
      <BlockNumber />
      <Account />
      <Balance />
    </>
  )
}