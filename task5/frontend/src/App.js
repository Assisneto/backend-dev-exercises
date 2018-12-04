import React, { Component } from 'react';

import './css/pure-min.css';
import './css/side-menu.css';
import SimpleLineChart from './components/graph';

class App extends Component {

  render() {
    return (
      <div id="layout">

    <a href="#menu" id="menuLink" className="menu-link">

        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">

                <li className="pure-menu-item"><a href="/task5" className="pure-menu-link">Task5</a></li>

                <li className="pure-menu-item"><a href="/task6" className="pure-menu-link">Task6</a></li>

                <li className="pure-menu-item"><a href="/task7" className="pure-menu-link">Task7</a></li>

            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1><strong>Backend-dev-exercises</strong></h1>

            </div>
          </div>


</div>
    )
  }
}

export default App;
