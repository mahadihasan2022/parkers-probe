import React from 'react';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Carts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mars from '../../images/mars.svg';
import lifeOnMars from '../../images/lifeOnMars.svg';
import parkerSolar from '../../images/parkerSolar.svg';
import olympus from '../../images/olympus.svg';
import spirit from '../../images/spirit.svg';
import sunLight from '../../images/sunLight.svg';

const Carts = () => {
    return (
       <div className='items'>
        <h1>Browse Popular Tour </h1>
    <div className='item '>
    <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={mars} />
        <Card.Body className='card-body'>
          <Card.Title className='title fw-bold'>The Planet Mars</Card.Title>
          <Card.Text className='text'>
            The fourth planet from the sun and second smallest planet.
          </Card.Text>
          <Button className='btn-info fw-bold'>Visit Now</Button>
        </Card.Body>
      </Card>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={parkerSolar} />
        <Card.Body>
          <Card.Title className='title fw-bold'>parkerSolar</Card.Title>
          <Card.Text className='text'>Parker Solar Probe a Mission to Touch the Sun. </Card.Text>
          <Button className='btn-info fw-bold'>Visit Now</Button>
        </Card.Body>
      </Card>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={olympus} />
        <Card.Body>
          <Card.Title className='title fw-bold'>Journey To Sun</Card.Title>
          <Card.Text className='text'>
        The Parker Probe's Journey.
          </Card.Text>
          <Button className='btn-info fw-bold'>Visit Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={lifeOnMars} />
        <Card.Body>
          <Card.Title className='title fw-bold'>Life On Mars</Card.Title>
          <Card.Text className='text'>
          The Red Planet is a cold, desert.
          </Card.Text>
          <Button className='btn-info fw-bold'>Visit Now</Button>
        </Card.Body>
      </Card>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={spirit} />
        <Card.Body>
          <Card.Title className='title fw-bold'>Spirit</Card.Title>
          <Card.Text className='text'>
          Spirit is one of a suite of spacecraft in NASA's second wave of Mars.
          </Card.Text>
          <Button className='btn-info fw-bold'>Visit Now</Button>
        </Card.Body>
      </Card>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={sunLight} />
        <Card.Body>
          <Card.Title className='title fw-bold'>Sun</Card.Title>
          <Card.Text className='text'>
          NASA's deep dive resource for Sun exploration.
          </Card.Text>
          <Button className='btn-info fw-bold'>Visit Now</Button>
        </Card.Body>
      </Card>
    </div>
       <div className='btn-details'>
        <button className='btn-color'>Simulator! <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
       </div>
       </div>
    );
};

export default Carts;