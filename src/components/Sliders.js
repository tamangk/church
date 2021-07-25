import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../images/slide1.png';
import Slide2 from '../images/slide2.jpeg';
import Slide3 from '../images/slide3.jpeg';

const Sliders = () => {
    return (
        <div className="slider-section">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    width="100%"
                    height="900vh"
                    alt="First slide"
                    />

                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slide2}
                    width="100%"
                    height="900vh"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slide3}
                    width="100%"
                    height="900vh"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Sliders;