import React, {Component} from 'react';
import api from '../services/api';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';


class SimpleLineChart extends Component {
 state = {
  list:[],
 }
 async componentDidMount(){
  const response = await api.get('/task7');
  console.log(response.data)
  this.setState({list:response.data})
}
  render () {
    return (
      <LineChart
        width={1200}
        height={300}
        data={this.state.list}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
          type='monotone'
          dataKey = 'total'
          stroke='#8884d8'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='age'/>
        <Legend />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
