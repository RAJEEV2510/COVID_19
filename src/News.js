import React from 'react';
import axios from 'axios'
import Cards from './NewsCard'
import './News.css'
class News extends React.Component{
state ={

news:[]
}
async componentDidMount ()
{
    const res= await axios.get('https://cryptic-ravine-96718.herokuapp.com/');
    console.log(res.data)
    this.setState(
        {
            news:res.data.news
        }
    )}
change = (value,index) => {

    if(index<12){
    return(
        <>
      <div className="react"> 
        <Cards   
        
        
         link={value.link}
         title={value.title}
        ></Cards>
      </div>   
        
       </>   )
    }
    else{
        return null
    }}
render(){

        return (
            <>

                <div class="news-card">
                {this.state.news.map(this.change)}
                </div>
            </>
        )
}
}
export default News;

