import React, { useContext } from 'react';
import ThemeContent from '../context/ThemeContext';

function Footer() {
  const theme = useContext(ThemeContent)
  return <footer> Tema Atual: {theme.color}</footer>
}

export default Footer;