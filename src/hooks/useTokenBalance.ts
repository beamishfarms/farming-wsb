import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import ERC20 from '../wsb/ERC20';
import useWsb from './useWsb';

const useTokenBalance = (token: ERC20) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const wsb = useWsb();

  const fetchBalance = useCallback(async () => {
    setBalance(await token.balanceOf(wsb.myAccount));
  }, [wsb?.isUnlocked, token]);

  useEffect(() => {
    if (wsb?.isUnlocked) {
      fetchBalance().catch((err) =>
        console.error(`Failed to fetch token balance: ${err.stack}`),
      );
      let refreshInterval = setInterval(fetchBalance, 10000);
      return () => clearInterval(refreshInterval);
    }
  }, [wsb?.isUnlocked, token]);

  return balance;
};

export default useTokenBalance;
