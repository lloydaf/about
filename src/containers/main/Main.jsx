import React from 'react';
import { Header } from '../../components/header/Header';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

const tabs = [
  {
    text: 'Home',
    route: '/'
  },
  {
    text: 'About',
    route: '/about'
  },
  {
    text: 'Blog',
    route: '/blog'
  }
];

export class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      selected: 0
    };
  }

  setTab(index) {
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <Header>
            { tabs.map((tab, index) => <Link key={index} to={ tab.route } className={`header--button ${this.state.selected === index ? 'selected' : 'unselected'}`} onClick={ () => this.setTab(index) }>{ tab.text }</Link>) }
          </Header>
        </div>
        <Switch>
          <Route path="/about">
            Hello
        </Route>
          <Route path="/blog">
            Blog
        </Route>
        </Switch></>
    )
  }
}