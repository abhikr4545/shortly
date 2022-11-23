import React from 'react'

import Navbar from './nav/Navbar';
import Hero from './hero/Hero';
import Statistics from './statistics/Statistics';
import Boost from './boost/Boost';

import "./App.scss";
import Footer from './footer/Footer';

const App = () => {
  return (
    <>
      <main className='main'>
        <Navbar />
        <Hero />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  )
}

export default App