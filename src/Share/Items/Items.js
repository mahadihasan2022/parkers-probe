import React from "react";
import cart from "../../images/cart.svg";
import planetOfMars from "../../images/planetOfMars.svg";
import astronomers from "../../images/astronomers.svg";
import explore from "../../images/explore.svg";
import "./Items.css";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();

  const addClick = () => {
    navigate("https://solarsystem.nasa.gov/solar-system/sun/overview/");
  };
  return (
    <div className="cart">
      <div className="container">
        <div className="cart-container">
          <div className="container-info">
            <div className="container-img">
              <img src={explore} alt="" width={250} />
            </div>
            <div>
              <h1>Journey of</h1>
              <h2>Mars</h2>
              <div className="btn-btn">
                <a href="https://solarsystem.nasa.gov/solar-system/sun/overview/">
                  <button className="btn-btn-info fw-bold">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-container">
          <div className="cont-info">
            <div className="cont-img">
              <img src={cart} alt="" width={250} />
            </div>
            <div>
              <h1>The</h1>
              <h2>Sun</h2>
              <div className="btn-btn">
                <a href="https://solarsystem.nasa.gov/solar-system/sun/overview/">
                  <button className="btn-btn-info fw-bold">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img src={astronomers} alt="" width={230} />
        </div>
        <div>
          <h1>Explore new</h1>
          <h2>Planets</h2>
          <div className="btn-btn">
            <a href="https://solarsystem.nasa.gov/solar-system/sun/overview/">
              <button className="btn-btn-info fw-bold">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
