import React from 'react';
import Slider from 'react-slick';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddOrRemoveBook from './AddOrRemoveBook';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bookclub.css';

const withSlide = (wrappedComponent, selectData, setBook) => {
  var settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Row>
        <Col>
          <h2>{selectData.title}</h2>
          <Slider className='slider' {...settings}>
            {selectData.list.map((book) => {
              return (
                <div>
                  <Card
                    bg='light'
                    text='dark'
                    style={{ width: '10rem' }}>
                    <Link onClick={() => { setBook(book) }} to={`/book/${book.bookId}`}>
                      <Card.Img variant='top' src={book.thumbnail} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.authors[0]}</Card.Text>
                      {(selectData.removeBook) ? <AddOrRemoveBook bookId={book.bookId} listName={selectData.title} functionality={'remove'} />: <></>}
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>
    </div>
  );
}

export default withSlide;


/* EXAMPLE FOR WHAT TO PASS IN FOR withSlides()
let toRead; <--name of your custom component, no need to do anything other than declare it

const faveList = { <-- this is your object of select Data that will customize the gallery component
  title: 'Favorites', <-- Header title
  className: 'fave', <-- Class name for any CSS reasons
  list: favorites, // <-- name of array of book objects to iterate through
};


objects of books will contain the following:
{
  authors: [String],
  bookId: String,
  title: String,
  thumbnail: String,
}
*/