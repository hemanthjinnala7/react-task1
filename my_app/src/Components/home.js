import React from 'react';
import './home.css';

 function Home() {
  return (
      <div className="main-bg">
        <div className="anchors-div anchors">
            <a className="home">HOME</a>
            <a>OFFER</a>
            <a>GALLERY</a>
            <a>BLOG</a>
            <a>ABOUT US</a>
            <a>CONTACT</a>
            <button className="anchor-button" >SUBMIT</button>
        </div>

        <div className="main-head">
            <h1 className="head-1">Adventureres</h1>
            <h1 className="head-2">Let yourself be impressed</h1>        
            <button className="btn-2">SIGN UP</button>
        </div>
    </div>
     
)}

export default Home;
