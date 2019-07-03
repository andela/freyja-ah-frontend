/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
  Button,
} from 'reactstrap';
import { Header } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './home.scss';


class Home extends Component {
    state = {
      isOpen: false,
    };

    handleToggle = () => {
      const { isOpen } = this.state;
      this.setState({
        isOpen: !isOpen,
      });
    }

    render() {
      const { isOpen } = this.state;
      return (
        <Fragment>
          <div className="landing-container">
            <Header isOpen={isOpen} toggle={this.handleToggle} />
            {/* <div className="slide-container"> */}
            {/* <UncontrolledCarousel items={images} /> */}
            <ul className="slide-container">
              <li>
                <div className="hwu-wrapper">
                  <div className="hwu">
                    <div>
                      <h2>Develop yourself the right way</h2>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hwu-wrapper">
                  <div className="hwu">
                    <div>
                      <h2>Grow your business with every conversation</h2>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hwu-wrapper">
                  <div className="hwu">
                    <div>
                      <h2>
                        Join  a community of like minded customer service skills enthusiast to
                        foster inspiration and innovation by leveraging on the modern web.
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* </div> */}
            <Link className="slink" to="/signup"><Button className="absolute-button hiw-button">Get Started</Button></Link>

            <div className="iconsHolder">
              <div className="icons">
                <img className="info" src="./src/assets/img/rate.svg" alt="take-courses" />
                <span>Take Courses</span>

              </div>
              <div className="icons">
                <img className="info" src="./src/assets/img/medal.svg" alt="take-courses" />
                <span>Get Certified</span>

              </div>
              <div className="icons">
                <img className="info" src="./src/assets/img/education.svg" alt="take-courses" />
                <span>community</span>

              </div>
            </div>
            <div className="desc-container">
              <div className="howitworks">

                <div className="hiw-img hiw">
                  <Card className="hiw-card">
                    <CardBody>
                      <CardImg className="hiw-card-img" src="./src/assets/img/howitworks.jpg" alt="howitworks" />
                    </CardBody>
                  </Card>
                </div>
                <div className="hiw-content hiw">
                  <Card className="hiw-card hiw-card-content">
                    <CardBody className="card-body-content">
                      <CardTitle><h2>How it Works</h2></CardTitle>
                      <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                          Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                          Sed facilisis massa quis congue tempus.
                      </CardText>
                      <Link className="slink" to="/signup"><Button className="hiw-button">Get Started</Button></Link>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="about-us">
                <div className="hiw-img hiw">
                  <Card className="hiw-card">
                    <CardBody>
                      <CardImg className="hiw-card-img" src="./src/assets/img/aboutus.jpg" alt="about-us" />
                    </CardBody>
                  </Card>
                </div>
                <div className="hiw hiw-content">
                  <Card className="hiw-card hiw-card-content">
                    <CardBody className="card-body-content">
                      <CardTitle><h2>About Us</h2></CardTitle>
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                      </CardText>
                      <Button className="hiw-button">Learn More</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>

              <div className="t-slide">
                <li className="testimonial">
                  <div className="hiw-img hiw">
                    <Card className="hiw-card">
                      <CardBody>
                        <CardImg className="test-card-img" src="./src/assets/img/testimonial.jpg" alt="testimonial" />
                      </CardBody>
                    </Card>
                  </div>
                  <div className="hiw hiw-content">
                    <Card className="hiw-card hiw-card-content">
                      <CardBody className="card-body-content">
                        <CardTitle><h1>&quot;</h1></CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                </li>
                <li className="testimonial">
                  <div className="hiw-img hiw">
                    <Card className="hiw-card">
                      <CardBody>
                        <CardImg className="test-card-img" src="./src/assets/img/testimonial2.jpg" alt="testimonial" />
                      </CardBody>
                    </Card>
                  </div>
                  <div className="hiw hiw-content">
                    <Card className="hiw-card hiw-card-content">
                      <CardBody className="card-body-content">
                        <CardTitle><h1>&quot;</h1></CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                </li>
                <li className="testimonial">
                  <div className="hiw-img hiw">
                    <Card className="hiw-card">
                      <CardBody>
                        <CardImg className="test-card-img" src="./src/assets/img/testimonial3.jpg" alt="testimonial" />
                      </CardBody>
                    </Card>
                  </div>
                  <div className="hiw hiw-content">
                    <Card className="hiw-card hiw-card-content">
                      <CardBody className="card-body-content">
                        <CardTitle><h1>&quot;</h1></CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                </li>
              </div>

            </div>
          </div>
          <div className="footer-wrapper">
            <Footer />
          </div>
        </Fragment>
      );
    }
}


export default Home;
