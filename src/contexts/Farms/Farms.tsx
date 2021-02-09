import React, { useCallback, useEffect, useState } from 'react';
import Context from './context';
import useWsb from '../../hooks/useWsb';
import { Farm } from '../../wsb';
import config, { farmDefinitions } from '../../config';

const Farms: React.FC = ({ children }) => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const wsb = useWsb();

  const fetchPools = useCallback(async () => {
    const farms: Farm[] = [];

    for (const farmInfo of Object.values(farmDefinitions)) {
      if (farmInfo.finished) {
        if (!wsb.isUnlocked) continue;

        // only show pools staked by user
        const balance = await wsb.stakedBalanceOnFarm(farmInfo.contract, wsb.myAccount);
        if (balance.lte(0)) {
          continue;
        }
      }
      farms.push({
        ...farmInfo,
        address: config.deployments[farmInfo.contract].address,
        depositToken: wsb.externalTokens[farmInfo.depositTokenName],
        earnToken: farmInfo.earnTokenName == 'WSB' ? wsb.WSB : wsb.VDS,
      });
    }
    farms.sort((a, b) => (a.sort > b.sort ? 1 : -1));
    setFarms(farms);
  }, [wsb, setFarms]);

  useEffect(() => {
    if (wsb) {
      fetchPools()
        .catch(err => console.error(`Failed to fetch pools: ${err.stack}`));
    }
  }, [wsb, fetchPools]);

  return <Context.Provider value={{ farms: farms }}>{children}</Context.Provider>;
};

export default Farms;
