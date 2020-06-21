import React from 'react';
import './India.css'
function Cards(props){
    
return(
    <>
    <div className="xard">
    <div className="xard-info">
    <h4
        style={{color:'white',
        marginLeft:'40px',
        fontFamily:"900",
                }}
    >{props.state}</h4>
    <ul>
 
    <li>Recover <span
    
    style={{
        color:'green',
        marginLeft:'55px'
    }}
    >▶️▶️▶️</span>{props.recovered}</li>
    <li>active <span
    
    style={{
        color:'deepskyblue',
        marginLeft:'68px'
    }}
    >▶️▶️▶️</span>{props.active}</li>
    <li>confirmed <span
    
    style={{
        color:'orange',
        marginLeft:'40px'
    }}
    >▶️▶️▶️</span>{props.confirmed}</li>
    <li>Death <span
    
    style={{
        color:'red',
        marginLeft:'68px'
    }}
    >▶️▶️▶️</span>{props.deaths}</li>

    <li>New Confirm <span
    
    style={{
        color:'deepskyblue',
        marginLeft:'20px'
    }}
    >▶️▶️▶️</span>{props.deltaconfirmed}</li>
    <li>New Death <span
    
    style={{
        color:'red',
        marginLeft:'33px'
    }}
    >▶️▶️▶️</span>{props.deltadeaths}</li>
    <li>New Recovered <span
    
    style={{
        color:'green',
        marginLeft:'20px'
    }}
    >▶️▶️▶️</span>{props.deltarecovered}</li>
 </ul>
    </div>
    </div>
    </>

)}
export default Cards;