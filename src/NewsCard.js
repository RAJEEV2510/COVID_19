import React from 'react';
import './News.css'
function Cards(props){
return(
    <>
    <div className="nCard">
    <div className="ncard-info" style={{
        height:"100px"
    }}>
    <p style={{

        fontSize:"17px",
        backgroundColor:"whitesmoke",
        height:"100px",
        fontWeight:"800"
    }}>
     <marquee>   {props.title}
     </marquee>
    <a href={props.link} className="na">
        Read More
    </a>
    </p>
    </div>
    </div>
    </>

)}
export default Cards;