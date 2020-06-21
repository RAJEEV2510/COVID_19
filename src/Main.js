import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios'
import Chart from './Chart'
class Main extends Component {

constructor(props)
{super(props)
    state={
       value:[], 
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    
  }
}
async componentDidMount()
{
    res=await axios.get('https://api.covid19india.org/data.json');
    this.state.value=res.data.statewise
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
      
          <h2>Welcome to React</h2>
        </div>
        <Bar className="bar"

          data={this.state.chartData}
          options={{
            title:{
              display:"rajeev",
              text:'Largest Cities In '+"rajeev",
              fontSize:25
            }
        
          }}
        />

      </div>
    );
  }
}

export default Main;