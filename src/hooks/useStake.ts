import { useCallback } from 'react';
import useWsb from './useWsb';
import { Farm } from '../wsb';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStake = (farm: Farm) => {
  const wsb = useWsb();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        wsb.stake(farm.contract, amount, farm.depositToken.decimal),
        `Stake ${amount} ${farm.depositTokenName} to ${farm.contract}`,
      );
    },
    [farm, wsb],
  );
  return { onStake: handleStake };
};

export default useStake;
