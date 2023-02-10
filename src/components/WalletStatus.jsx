import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { ethers } from 'ethers'
import styled from "styled-components"

const StyledWalletStatusDiv = styled.div`
  display: flex;
  gap: 20px;
`

// 체인Id
function ChainId() {
  const { chainId } = useWeb3React()

  return (
    <>
      <span>Chain Id</span>
      <span>{chainId}</span>
    </>
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
    <>
      <span>Block Number :</span>
      <span>{blockNumber}</span>
    </>
  )
}

// account 정보 
function Account() {
  const { account } = useWeb3React()

  return (
  <>
    <span>Account :</span>
    <span>{account ? `${account.substring(0, 6)}...${account.substring(account.length-4)}` : ''}</span>
  </>
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
    <>
      <span>Balance :</span>
      <span>{balance ? `${ethers.utils.formatEther(balance)} ETH` : ''}</span>
    </>
  )
}



export function WalletStatus() {
  return (
    <StyledWalletStatusDiv>
      <ChainId />
      <BlockNumber />
      <Account />
      <Balance />
    </StyledWalletStatusDiv>
  )
}