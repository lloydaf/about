import React from 'react';
import './Header.css';

export const Header = (props) =>
  <header className="header background--white full--width">
    { props.children }
  </header>