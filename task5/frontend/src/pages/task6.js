import React, { Component } from 'react';

import api from '../services/api';
import '../css/pure-min.css';
import '../css/side-menu.css';
import CustomInput from './../components/CustomInput';

export default class task6 extends Component {
  state = {
    list: [],
    titleTable: '',
    table:'',
  }

  handleTableChange = event => {
    this.setState({table: event.target.value});
  }
  handleSubmit =  async event =>{
    event.preventDefault();
    this.setState({titleTable:this.state.table})

    await api.get(`/task6/${this.state.table}`,).then( (response) => {
      this.setState({list:response.data});

    });
    this.setState({table: ''})
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
            <h1>task6</h1></div>
         </div>
         <div className="content" id="content">
           <div className="pure-form pure-form-aligned">

              <form className="pure-form pure-form-aligned" onSubmit = {this.handleSubmit} method='post'>
              <h3>Digite corretamente o nome da tabela que você deseja</h3>
              <CustomInput id="Table" type="text" name="table" value={this.state.table} onChange = {this.handleTableChange} label="Table" />
              </form>

              </div>
              <div>
                <h2><strong>{this.state.titleTable}</strong></h2>
              </div>
              <div className="content" id="content">
                <div className="pure-form pure-form-aligned">
                </div>
                <div>
                  <table className="pure-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nome</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map(data => {

                          return (

                            <tr key={data.id}>
                            <th>{data.id}</th>
                            <th>{data.name}</th>

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
