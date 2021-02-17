import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Farm from '../Farm';
import FarmCards from './FarmCards';
import styled from 'styled-components'
import background from '../../img/background.png'

const Farms: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <StyledFarm style={{backgroundImage: `url(${background})`}}>
      <Switch>
        <Page>
          <Route exact path={path}>
            <PageHeader
              icon={'🏦'}
              title="Pick a Farm."
              subtitle="Earn WSB by providing liquidity"
            />
            <FarmCards />
          </Route>
          <Route path={`${path}/:farmId`}>
            <Farm />
          </Route>
          <Redirect from="/" to={`${path}/WSBETHPool`} />
        </Page>
      </Switch>
    </StyledFarm>
  );
};

const StyledFarm = styled.div`
  backgroundImage: 'url(${background})'
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
`

export default Farms;
