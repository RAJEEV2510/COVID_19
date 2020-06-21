import React from 'react';
import logo from './logo.svg';
import './India.css';
import axios from 'axios'
import Cards from './IndianCard.js'
import Search from './SearchBox'
class India extends React.Component{
state={

    statewise:[],
    Loading:true,
    SearchField:""

  }
//asyn for synchronous 
 async  componentDidMount()
{

//await use for wait until we get request from api
 const res= await axios.get('https://api.covid19india.org/data.json')

 this.setState(
    {
     statewise:res.data.statewise,
      Loading:false
    }
)

}


change = (value) =>
{

if (this.state.SearchField!="" && value.state.toLowerCase().indexOf(this.state.SearchField.toLowerCase())==-1)
{
    return null
}

  return(
  <>
<div className="react"> 
  <Cards   
   state={value.state}
   recovered={value.recovered}
  active={value.active}
  deaths={value.deaths}
  confirmed={value.confirmed}  
   deltaconfirmed={value.deltaconfirmed}
   deltadeaths={value.deltadeaths}
  deltarecovered={value.deltarecovered}
   
></Cards>
</div>   
  
 </>
  )
}

handle =(e) =>
{console.log(e.target.value)
    this.setState(
        {SearchField:e.target.value
        })
        
}
render(){

return (
    <>
   
      <h1 className="covid">
        COVID-19  WEB APP
        INDIA STATS
      </h1>   
      <img 
        className="imgcorona"
      src="https://media.giphy.com/media/PnD1HSO0rVx8AiNIMl/giphy.gif"></img>
      <h2 >
      Search 
    </h2>
    <div className="search-Box">

        <Search  placeholder="Search State Name ... " handlechange={this.handle}

        ></Search>
    </div>
    
  <div class="Card-info">
  {this.state.statewise.map(this.change)}
 

    </div>
    
  </>
)}}
export default India;
 