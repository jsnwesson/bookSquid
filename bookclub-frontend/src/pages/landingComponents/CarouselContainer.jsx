import React from 'react';
import RecentReviews from './RecentReviews.jsx';
import Recommended from './Recommended.jsx';
import LatestReleases from './LatestReleases.jsx';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const CarouselContainer = () => {

  return (
    <Container >

      <Row id="carouselContainer">
        <Col>
          <RecentReviews />
        </Col>
      </Row>
      <Row>
        <Col>
          <Recommended />
        </Col>
      </Row>
      <Row>
        <Col>
          <LatestReleases />
        </Col>
      </Row>
    </Container>
  )

}

export default CarouselContainer;