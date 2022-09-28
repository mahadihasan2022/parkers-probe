import React from "react";
import Card from "react-bootstrap/Card";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-container">
        <div>
          <ul className="footer-info">
            <h6>Discover</h6>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Home
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                About Us
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Portfolio
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-info">
            <h6>About</h6>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Client
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Team
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Career
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Testimonial
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Journal
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-info">
            <h6>Help</h6>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Privacy Policy
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Trams & Conditions
              </a>
            </li>
            <li className="list-style">
              <a href="" className="text-decoration-none text-white">
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-info">
            <h6>Contact Us</h6>
            <li className="text-white list-style">Phone: 01409117333</li>
            <li className="text-white list-style pl-5"> 01782831313</li>

            <li className="text-white list-style">
              Email: mahadi35-2848@diu.edu.bd
            </li>
            <div className="d-flex p-2">
              <div>
                <input
                  className="email"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <div>
                <button className="footer-btn">Subscribe</button>
              </div>
            </div>
          </ul>
        </div>
        <div>
          <p className="fw-bold text-lg">Follow Us</p>
          <SocialIcon
            url="https://twitter.com/jaketrent"
            bgColor="black"
            fgColor="white"
            className="icon"
          />
          <SocialIcon
            url="https://facebook.com/jaketrent"
            bgColor="black"
            fgColor="white"
            className="icon"
          />
          <SocialIcon
            url="https://google.com/jaketrent"
            bgColor="black"
            fgColor="white"
            className="icon"
          />
          <SocialIcon
            url="https://whatsapp.com/jaketrent"
            bgColor="black"
            fgColor="white"
            className="icon"
          />
          <SocialIcon
            url="https://youtube.com/jaketrent"
            bgColor="black"
            fgColor="white"
            className="icon"
          />
        </div>
      </div>
      <Card>
        {/* <Card.Img variant="top" src={earth} height={200} className='footer-img'/> */}
        <Card.Body>
          <Card.Text className="footer">
            <FontAwesomeIcon icon={faCopyright} />
            Copy Right <span className="footer-in"> Parker's Probe</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
