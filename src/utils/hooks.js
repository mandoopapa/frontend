import { useWeb3React } from "@web3-react/core";
import { useState, useEffect, useCallback } from "react";
import { injected } from "./connectors";

export function useWeb3Connect() {
  const { activate, active } = useWeb3React();
  const [tried, setTried] = useState(false);

  const tryActivate = useCallback(() => {
    async function _tryActivatie() {
    const isAuthorized = await injected.isAuthorized();
      
    if (isAuthorized) {
      try {
          await activate(injected, undefined, true)
      } catch (error) {
          window.alert('Error: ' + (error && error.message));
      }
    }
    setTried(true);
    }
    _tryActivatie()
  }, [activate])

  // useEffect를 이용해 tryActviate가 실행되게 하기 위해서 작성
  useEffect(() => {
    tryActivate();
  }, [tryActivate]);

  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const  { active, error, activate } = useWeb3React()

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log('handle connect')
        activate(injected);
      }
      const handleChainChanged = (chainId) => {
        console.log('handleChainChanged', chainId)
        activate(injected);
      }
      const handleAccountsChanged = (accounts) => {
        console.log('handleAccountsChanged', accounts)
        if (accounts.length > 0) {
          activate(injected);
        }
      }
      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('ChainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}