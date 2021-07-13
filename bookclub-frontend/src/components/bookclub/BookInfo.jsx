import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'

const BookInfo = (props) => {
  /*
  console.log(props.book)

  Props (current) from BookGallery:
  - props.book.author
  - props.book.title
  - props.book.thumbnail

  Props from Search:
  - props.book.gid
  */
  return (
    <Container>
      <Row >
        <Col xs={3} style={{ backgroundColor: '#0dcaf0' }}>
          <Image src={props.book.thumbnail} fluid />
        </Col>
        <Col style={{ backgroundColor: '#20c997' }}>
          <Row style={{ backgroundColor: '#0d6efd' }}>
            <Col>
              <Row><h2><b>{props.book.title}</b></h2></Row>
              <Row><h5>Published: <b>(Date)</b></h5></Row>
            </Col>
            <Col><h4>(Genre)</h4></Col>
          </Row>
          <Row><h3><b>{props.book.author}</b></h3></Row>
          <Col style={{ backgroundColor: '#ffc107' }}>
            {/* <h4>Here is the novel that will be forever considered a triumph of the imagination. Set on the desert planet Arrakis, <b>Dune</b> is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family--and would bring to fruition humankind's most ancient and unattainable dream. <p> A stunning blend of adventure and mysticism, environmentalism and politics, <b>Dune</b> won the first Nebula Award, shared the Hugo Award, and formed the basis of what it undoubtedly the grandest epic in science fiction. </p></h4> */}
            <h4>Description</h4>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default BookInfo;