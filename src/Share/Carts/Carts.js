import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Carts.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mars from "../../images/mars.svg";
import lifeOnMars from "../../images/lifeOnMars.svg";
import parkerSolar from "../../images/parkerSolar.svg";
import olympus from "../../images/olympus.svg";
import spirit from "../../images/spirit.svg";
import sunLight from "../../images/sunLight.svg";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const navigate = useNavigate();


  const handleAddQuiz = () =>{
    navigate('/Quiz');
  }
  const handleAddSun = () =>{
    navigate('/image');
  }



  return (
    <div className="items">
      <h1>Learning Material Tour. </h1>
      <div className="item ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mars} />
          <Card.Body className="card-body">
            <Card.Title className="title fw-bold">
              Parker solar probe overview.
            </Card.Title>
            <Card.Text className="text">
              The overview of Parker's probe.
            </Card.Text>
            <a href=" https://www.youtube.com/watch?app=desktop&v=LkaLfbuB_6E&feature=youtu.be">
              <Button className="btn-info fw-bold">Visit Now</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={parkerSolar} />
          <Card.Body>
            <Card.Title className="title fw-bold">Parker Solar</Card.Title>
            <Card.Text className="text">
              Parker Solar Probe a Mission to Touch the Sun.{" "}
            </Card.Text>
            <a href="https://youtu.be/XBudjihQKsw">
              <Button className="btn-info fw-bold">Visit Now</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={olympus} />
          <Card.Body>
            <Card.Title className="title fw-bold">
              Why won???t Parker's probe melt?
            </Card.Title>
            <Card.Text className="text"></Card.Text>
            <a href="https://www.nasa.gov/feature/goddard/2018/traveling-to-the-sun-why-won-t-parker-solar-probe-melt">
              <Button className="btn-info fw-bold">Visit Now</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lifeOnMars} />
          <Card.Body>
            <Card.Title className="title fw-bold">
              5 weird things happened in space
            </Card.Title>
            <Card.Text className="text"></Card.Text>
            <a href="https://www.nasa.gov/feature/goddard/2021/five-weird-things-that-happen-in-outer-space">
              <Button className="btn-info fw-bold">Visit Now</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={spirit} />
          <Card.Body>
            <Card.Title className="title fw-bold">5 new discovery</Card.Title>
            <Card.Text className="text"></Card.Text>
            <a href="https://www.nasa.gov/feature/goddard/2021/five-questions-about-space-weather-and-its-effects-on-earth-answered">
              <Button className="btn-info fw-bold">Visit Now</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={sunLight} />
          <Card.Body>
            <Card.Title className="title fw-bold">Sun for kids???QA</Card.Title>
            <Card.Text className="text"></Card.Text>
            <Button onClick={handleAddSun} className="btn-info fw-bold">Visit Now</Button>
           
          </Card.Body>
        </Card>
      </div>
      <div className="btn-details">
        <button 
        onClick={handleAddQuiz} className="btn-color">Explore To Learn!
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carts;
