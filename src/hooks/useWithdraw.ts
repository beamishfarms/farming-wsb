import { useCallback } from 'react';
import useWsb from './useWsb';
import { Farm } from '../wsb';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useWithdraw = (farm: Farm) => {
  const wsb = useWsb();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        wsb.unstake(farm.contract, amount),
        `Withdraw ${amount} ${farm.depositTokenName} from ${farm.contract}`,
      );
    },
    [farm, wsb],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdraw;
