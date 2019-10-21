import React from 'react';
import { Header } from 'components';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Home } from 'containers';

const tabs = [
  {
    text: 'Home',
    route: '/home'
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
            { tabs.map((tab, index) => <Link key={ index } to={ tab.route } className={ `header--button ${this.state.selected === index ? 'selected' : 'unselected'}` } onClick={ () => this.setTab(index) }>{ tab.text }</Link>) }
          </Header>
        </div>
        <Redirect from="/" to="/home" />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            About
          </Route>
          <Route exact path="/blog">
            Blog
          </Route>
        </Switch></>
    )
  }
}