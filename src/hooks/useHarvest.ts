import { useCallback } from 'react';
import useWsb from './useWsb';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Farm } from '../wsb';

const useHarvest = (farm: Farm) => {
  const wsb = useWsb();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      wsb.harvest(farm.contract),
      `Claim ${farm.earnTokenName} from ${farm.contract}`,
    );
  }, [farm, wsb]);

  return { onReward: handleReward };
};

export default useHarvest;
