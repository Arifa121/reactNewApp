import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img3.jpg'
import img3 from '../assets/rest.jpg'
const Banner = () => {
  return (
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
            <Col lg={7}>
              <Carousel>
                    <Carousel.Item interval={2000}>
                      <img 
                        style={{height:'65vh'}}
                        className='d-block w-100'
                        src={img1} 
                        alt="image-1"/>
                    
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                      </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img 
                      style={{height:'65vh'}}
                      className='d-block w-100'
                      src={img2}
                      alt="image-2"
                      />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img 
                       style={{height:'65vh'}}
                       className='d-block w-100'
                       src={img3} 
                       alt="image-3"
                       />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
           </Col>
        </Row>
        <div className="text-center">
        <h2 className='display-5 mt-3'>Delicious Food for Every Occations!</h2>
        <p className="lead text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero.</p>
        </div>
        
      </Container>

  )
}

export default Banner
