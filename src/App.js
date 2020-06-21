import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import India from './India'
import Country from './Country'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Menu from './Menu'
import News from './News'
import './App.css'
import PORT from './About'
class App extends React.Component{
render(){
    return (
    <>
    <BrowserRouter>
        <Menu></Menu>
        <Switch>
        <Route path="/" exact component={India}></Route>
        <Route path="/Country" exact component={Country}></Route>
        <Route path="/About" exact component={PORT}></Route>
     </Switch>
     </BrowserRouter>
     <br></br>
     <br></br>
     <iframe style={{
    width:'120px',height:'240px'
    , marginWidth:"0",
     marginHeight:'0'}}
    scrolling="no" frameborder="0" 
    src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=shoping2156-21&marketplace=amazon&region=IN&placement=B074123WSD&asins=B074123WSD&linkId=f0027e12dcb462e48d12c46c1fd8e4e1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>
    <iframe style={{
        width:'120px' ,
        height:'240px'
        ,marginwidth:'0'
         ,marginheight:'0'}} scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=shoping2156-21&marketplace=amazon&region=IN&placement=B07HGJKDRR&asins=B07HGJKDRR&linkId=856e5c26f261c2d1d74e548a160ff931&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0058ab&bg_color=bd4f4f">
    </iframe>
    <br></br>
    <br></br>
    
    <iframe style={{width:'120px',height:'240px', marginwidth:'0',
     marginheight:'0'}}
      scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=shoping2156-21&marketplace=amazon&region=IN&placement=B07W6H9YM9&asins=B07W6H9YM9&linkId=5a8ab1728fa23975a77c9732c1bb2fe5&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0058ab&bg_color=bd4f4f">
    </iframe>
    <iframe style={{width:'120px',height:'240px',
     marginwidth:'0',
      marginheight:'0' }}
      scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=shoping2156-21&marketplace=amazon&region=IN&placement=B07RTYFS9S&asins=B07RTYFS9S&linkId=6a8a99513c50eb684ad0a3b3aa5d648c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0058ab&bg_color=bd4f4f">
    </iframe>
     <div class="news-section">
        
     <h1 className="newsHeader" >
         NEWS SECTION
     </h1> 
     <p  className="newspara"
    >📰</p>
     
    
</div>     <News></News>
     
     </>
)}

}
export default App;
