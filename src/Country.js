import React from 'react';
import logo from './logo.svg';
import './Country.css';
import axios from 'axios'
import Cards from './Card.js'
import India from './India'
import Search from './SearchBox'

class App extends React.Component{
state={

    Countries:[],
    global:[],
    CurrentDate:[],
    Loading:true,
    SearchField:""

  }
//asyn for synchronous 
 async  componentDidMount()
{
    const res1= await axios.get('https://api.covid19india.org/data.json')
    console.log(res1.data) 
    //await use for wait until we get request from api
 const res= await axios.get('https://api.covid19api.com/summary')
 console.log(res.data) 
 this.setState(
    {
      Countries:res.data.Countries,
      global:res.data.Global,
      CurrentDate:res.data.Date,
      Loading:false
    }



  )}


change = (value) =>
{

if (this.state.SearchField!="" && value.Country.toLowerCase().indexOf(this.state.SearchField.toLowerCase())==-1)
{
    return null
}

  return(
  <>

  <div className="react"> 
  <Cards   
   Country={value.Country}
   CountryCode={value.CountryCode}
   NewConfirmed={value.NewConfirmed}
   NewDeaths={value.NewDeaths}
   NewRecovered={value.NewRecovered}
   TotalConfirmed={value.TotalConfirmed}
   TotalDeaths={value.TotalDeaths}
   TotalRecovered={value.TotalRecovered}
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

if(this.state.Loading==true)
{
  return( <h1
  style={{textAlign:"center"}}
  >Loading... DATA</h1>)
}
return (
    <>
     <h1 className="covid">
     Covid-19 Stats BY COUNTRY
     <br>
       
     </br>
     
      </h1>   
      <img 
        className="imgcorona"
      src="https://media.giphy.com/media/PnD1HSO0rVx8AiNIMl/giphy.gif"></img>
           <h2 >
      Search 
    </h2>

    <div className="search-Box">

        <Search  placeholder="Search country Name ... " handlechange={this.handle}

        ></Search>
    </div>
    
  <div class="Card-info">
    {this.state.Countries.map(this.change)}

    </div>
  </>
)}}
export default App;
