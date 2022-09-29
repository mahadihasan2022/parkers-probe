import React from 'react';
import summary from '../../images/summary.svg';
import'./Image.css';

const Image = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={summary} class="d-block w-100 " alt=""/>
    </div>
  </div>
</div>
    );
};

export default Image;