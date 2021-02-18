import React from 'react'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Main from './components/Main'
import Walkthrough from './components/Walkthrough'
import Footer from './components/Footer'
import styled from 'styled-components'

  

const Home: React.FC = () => {

  return (
    <>
      <TopBar />
       <Hero />
       <Main />
       <Walkthrough />
       <Footer />      
    </>
  );
};
export default Home;
