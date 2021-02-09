import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useWsb from './useWsb';
import { ContractName } from '../wsb';

const useEarnings = (poolName: ContractName) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const wsb = useWsb();

  const fetchBalance = useCallback(async () => {
    const balance = await wsb.earnedFromFarm(poolName, wsb.myAccount);
    setBalance(balance);
  }, [wsb?.isUnlocked, poolName]);

  useEffect(() => {
    if (wsb?.isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, 10000);
      return () => clearInterval(refreshBalance);
    }
  }, [wsb?.isUnlocked, poolName, wsb]);

  return balance;
};

export default useEarnings;
