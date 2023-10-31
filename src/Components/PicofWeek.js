import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const PicofWeek = () => {
    const [show,setShow] = useState(false);
  return (
    <section id='musttry'>
        <div className="text-center my-5 p-3">
            <div className="display-5 text-primary "><i class="ni bi-search-heart"></i> PickOfthe Week ! </div>
        </div>
        <Container>
            <Row className='mb-5'>
                <Col md={7} className=''>
                    <Image src={require('../assets/img1.jpg')} fluid={true} alt='pic' rounded ></Image>
                </Col>
                <Col md={5} className='mb-5 ps-5 mt-sm-4'>
                    <div>
                        <h2 className='h1'>
                            Special Mandhi Briyani
                        </h2>
                        <p className='fs-4'>
                        Lorem ipsum dolor sit amet consequuntur officia quam quis incidunt mollitia nulla harum aliquam magni numquam similique rem laboriosam iste quod consequatur dignissimos! At earum odio itaque
                        </p>
                        <Button variant='primary' onClick={()=>setShow(true)}> Buy Now <i class='bi bi-basket'></i></Button>
                    </div>
                   </Col>
            </Row>
            <ToastContainer className='p-3 position-fixed bottom-0 end-0' position='bottom-end'>
                <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide >
                    <Toast.Header>

                        
                        <strong>Added Special Mandhi Briyani</strong>
                        <small className='p-3'> just now</small>
                    </Toast.Header>
                    <Toast.Body className='p-3'>Nice special choice</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>

    </section>
  )
}

export default PicofWeek