import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { UseWalletProvider } from 'use-wallet';

import FarmsProvider from './contexts/Farms';
import WsbProvider from './contexts/WsbProvider';
import ModalsProvider from './contexts/Modals';

import Farms from './views/Farms';
import Home from './views/Home'

import store from './state';
import theme from './theme';
import config from './config';
import Updaters from './state/Updaters';
import Popups from './components/Popups';
import Background from './components/Background'

const App: React.FC = () => {
  return (
    <Providers>
      <Router>
      <Background>
        <Switch>
            <Route path="/farm">
              <Farms />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          <Redirect from="/" to="farm" />
        </Switch>
        </Background>
      </Router>
    </Providers>
  );
};

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider chainId={config.chainId}>
        <Provider store={store}>
          <Updaters />
          <WsbProvider>
            <ModalsProvider>
              <FarmsProvider>
                <>
                  <Popups />
                  {children}
                </>
              </FarmsProvider>
            </ModalsProvider>
          </WsbProvider>
        </Provider>
      </UseWalletProvider>
    </ThemeProvider>
  );
};

export default App;
