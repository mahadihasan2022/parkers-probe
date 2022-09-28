import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel">
      <div className="carousel-container">
        <div>
          <h1>Parker's Solar Probe</h1>
          <h2>Holistic Success.</h2>
          <p className="carousel-info">
            The Parker Solar Probe is a NASA space probe launched in 2018 with
            the mission of making observations of the outer corona of the Sun.
            It will approach to within 9.86 solar radii (6.9 million km or 4.3
            million miles)from the center of the Sun,
          </p>
          <p className="carousel-details">
            and by 2025 will travel, at closest approach, as fast as 690,000
            km/h (430,000 mph), or 0.064% the speed of light. It is the fastest
            object ever built.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
