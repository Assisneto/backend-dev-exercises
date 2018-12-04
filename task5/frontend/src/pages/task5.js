import React, { Component } from 'react';

import api from '../services/api';
import '../css/pure-min.css';
import '../css/side-menu.css';

export default class task5 extends Component {
  state = {
    list: [],
  }
  async componentDidMount(){
    const response = await api.get('/task5');
    this.setState({list:response.data})
  }
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
                  <li className="pure-menu-item"><a href="/task6" className="pure-menu-link">Task6</a></li>
                  <li className="pure-menu-item"><a href="/task7" className="pure-menu-link">Task7</a></li>
              </ul>
          </div>
      </div>

          <div id="main">
              <div className="header">
                <h1>Porcentagem de pessoas que ganham acima de 50K por ano</h1>
              </div>
              <div className="content" id="content">
                <div className="pure-form pure-form-aligned">
                </div>
                <div>
                  <table className="pure-table">
                    <thead>
                      <tr>
                        <th>Raça</th>
                        <th>Pessoas</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map(data => {

                          return (

                            <tr key={data.row.id}>
                              <th>{data.row.name}</th>
                              <th>{data.row.count}</th>
                              <th>{data.row.sum}</th>
                              <th>{data.soma}%</th>

                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


  </div>
    );
  }
}
