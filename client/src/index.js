import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

import App from './App';
import Home from './home/HomeContainer';
import About from './about/AboutContainer';
import Articles from './articles/ArticlesContainer';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
    </Route>
  </Router>,
  document.getElementById('root')
);
