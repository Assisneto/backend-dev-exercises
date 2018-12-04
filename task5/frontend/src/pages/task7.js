import React, { Component } from 'react';

import '../css/pure-min.css';
import '../css/side-menu.css';
import SimpleLineChart from '../components/graph';

export default class task7 extends Component {
  render() {
    return(
    <div id="layout">

    <a href="#menu" id="menuLink" className="menu-link">

        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">

                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>

                <li className="pure-menu-item"><a href="/task5" className="pure-menu-link">Task5</a></li>

                <li className="pure-menu-item"><a href="/task6" className="pure-menu-link">Task6</a></li>


            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1><strong>Task7</strong></h1>

            </div>
            <div>
              <h1>Medias de horas trabalhadas por semana em cada faixa etaria</h1>
              <SimpleLineChart/>
            </div>
          </div>


</div>
    )
  }
};

