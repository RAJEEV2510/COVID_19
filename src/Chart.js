import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios'
import Main from './Main'
class Chart extends Component {

state={
    statewise:[]
}

async componentDidMount()
{
    const  res=await axios.get('https://api.covid19india.org/data.json');
    this.state.statewise=res.data.statewise
}

  render() {

    return (
     <>

    


      </>

    
    )
  }
}

export default Chart;