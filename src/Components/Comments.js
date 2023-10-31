import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FloatingLabel,
  FormControl,
} from "react-bootstrap";
import { Form } from "react-bootstrap";

const Comments = () => {
  return (
    <section id="contactus" className="bg-light py-3">
      <div className="text-center my-5 p-3">
        <div className="display-5 text-primary ">
          Comments
          <i class="ni bi-chat-left-heart"></i>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope-open"></i>
                </InputGroup.Text>
                <FloatingLabel label="Email address" controlId="floatingInput">
                  <FormControl type="email" placeholder="example@gmail.com" />
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-fill"></i>
                </InputGroup.Text>
                <FloatingLabel label="Name" controlId="floatingInput">
                  <FormControl type="text" placeholder="name" />
                </FloatingLabel>
              </InputGroup>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
                placeholder="Leave a comment here"
              >
                <FormControl as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
