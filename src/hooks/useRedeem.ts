import { useCallback } from 'react';
import useWsb from './useWsb';
import { Farm } from '../wsb';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeem = (farm: Farm) => {
  const wsb = useWsb();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    handleTransactionReceipt(wsb.exit(farm.contract), `Redeem ${farm.contract}`);
  }, [farm, wsb]);

  return { onRedeem: handleRedeem };
};

export default useRedeem;
