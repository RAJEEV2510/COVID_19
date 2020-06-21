import React from 'react';
import './Card.css'
function Cards(props){

return(
    <>
    <div className="Card">
    <div className="card-info">
    <img src={`https://www.countryflags.io/${props.CountryCode}/flat/64.png`}/>
    <ul>
    <li>
   <h3>  {props.Country}
   </h3>
    </li>
   <li>
   New Confirm <span
    
    style={{
        color:'orange',
        marginLeft:'22px'
    }}
    >▶️▶️▶️</span>{props.NewConfirmed}
   </li>
   <li>
   New Deaths <span
    
    style={{
        color:'red',
        marginLeft:'30px'
    }}
    >▶️▶️▶️</span>{props.NewDeaths}
   </li>
   <li>
   New Recover  <span
    
    style={{
        color:'green',
        marginLeft:'20px'
    }}
    >▶️▶️▶️</span>{props.NewRecovered}
   </li>
   <li>
    Confirm <span
    
    style={{
        color:'orange',
        marginLeft:'53px'
    }}
    >▶️▶️▶️</span>{props.TotalConfirmed}
   </li>
   <li>
   Deaths <span
    
    style={{
        color:'red',
        marginLeft:'60px'
    }}
    >▶️▶️▶️</span>{props.TotalDeaths}
   </li>
   <li>
   Recovered <span
    
    style={{
        color:'green',
        marginLeft:'35px'
    }}
    >▶️▶️▶️</span>{props.TotalRecovered}
   </li>
   </ul>
</div>
    </div>
    </>

)}
export default Cards;