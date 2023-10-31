
import { Container, Row, Col } from 'react-bootstrap';
import RestCard from './RestCard';
import { useState } from 'react';

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4,5,6,7,8]);

  // Create an array of image sources for each card
  const imageSources = [
    require('../assets/img1.jpg'), // Image for card 1
    require('../assets/img2.jpg'), // Image for card 2
    require('../assets/img1.jpg'), // Image for card 3
    require('../assets/rest.jpg'),
    require('../assets/img2.jpg'), // Image for card 2
    require('../assets/img1.jpg'), // Image for card 3
    require('../assets/rest.jpg'),
    require('../assets/img1.jpg')
  ];

  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center mb-4 my-3 py-3">
          <h3 className="text-primary">
            Treat yourself with our Everyday Menu{" "}
            <i class="bi bi-emoji-laughing-fill"></i>
          </h3>
        </div>
        <Row>
          {menu.map((item, index) => {
            return (
              <Col md={6} lg={3} key={item}>
                <RestCard imageUrl={imageSources[index]} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
