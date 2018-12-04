import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import task5 from './pages/task5'
import task6 from './pages/task6'
import task7 from './pages/task7'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/task5" component={task5}/>
        <Route exact path="/task6" component={task6}/>
        <Route exact path="/task7" component={task7}/>
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
