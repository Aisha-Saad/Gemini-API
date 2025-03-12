import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-contianer">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trip</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trip</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trip</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
          <p className="bottom-info">
        Gemini may display info , including about pepole{" "}
      </p>
        </div>
      
      </div>
    
    </div>
  );
};

export default Main;
