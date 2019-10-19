import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';
import {
  BrowserRouter as Router,
} from "react-router-dom";
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router><Main /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
