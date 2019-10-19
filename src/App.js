import React from 'react';
import './App.css';
import { Header } from './libs/components/header/Header';
function App() {

  const tabs = [
    {
      text: 'About',
      route: '/about'
    },
    {
      text: 'Blog',
      route: '/blog'
    }
  ];

  return (
    <div className="App">
      <Header>
        { tabs.map(tab => <div className="header--button">{ tab.text }</div>) }
      </Header>
    </div>
  );
}

export default App;
