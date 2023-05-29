import React from 'react';

import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';

import './index.css';
import ThemeProvider from './context/ThemeProvider';

function App() {


  return (
    <ThemeProvider >
    

        <Header />
        <Image />
        <Footer />


    </ThemeProvider>
  );
}

export default App;
