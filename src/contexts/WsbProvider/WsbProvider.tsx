import React, { createContext, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import Wsb from '../../wsb';
import config from '../../config';

export interface WsbProviderContext {
  wsb?: Wsb;
}

export const Context = createContext<WsbProviderContext>({ wsb: null });

export const WsbProvider: React.FC = ({ children }) => {
  const { ethereum, account } = useWallet();
  const [wsb, setWsb] = useState<Wsb>();

  useEffect(() => {
    if (!wsb) {
      const wsb = new Wsb(config);
      if (account) {
        // wallet was unlocked at initialization
        wsb.unlockWallet(ethereum, account);
      }
      setWsb(wsb);
    } else if (account) {
      wsb.unlockWallet(ethereum, account);
    }
  }, [account]);

  return <Context.Provider value={{ wsb: wsb }}>{children}</Context.Provider>;
};
