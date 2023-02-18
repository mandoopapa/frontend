import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { ethers } from 'ethers'

// Chain ID Information
function ChainId() {
  const { chainId } = useWeb3React()

  return (
    <div>
      <span>Chain Id</span>
      <span>{chainId}</span>
    </div>
  )
}

// BlockNumber Information
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
    <div>
        <span>Block Number</span>
        <span>{blockNumber}</span>
    </div>
  )
}

// account Information. wallet account is too big number, so that omitted except for the last 4 digits.  
function Account() {
  const { account } = useWeb3React()

  return (
  <div>
    <span>Account</span>
    <span>{account ? `${account.substring(0, 6)}...${account.substring(account.length-4)}` : ''}</span>
  </div>
  )
}

// Balance Information
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
    <div>
      <span>Balance</span>
      <span>{balance ? `${ethers.utils.formatEther(balance)} ETH` : ''}</span>
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