import React from 'react';
import Slider from 'react-slick';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import FigureCaption from 'react-bootstrap/FigureCaption';
import FigureImage from 'react-bootstrap/FigureImage';
import Media from 'react-bootstrap/Media';
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
    slidesToShow: 3,
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
                  {/* <Media
                    style={{
                      outline: '1em'
                    }}
                    >
                      <Link onClick={() => { setBook(book) }} to={`/book/${book.bookId}`}>
                        <img
                          alt="Sample"
                          height={100}
                          // width={100}
                          className="mr-3"
                          src={book.thumbnail}
                        />
                      </Link>
                      <Media.Body>
                        <h5>{book.title}</h5>
                        <p>{book.authors[0]}</p>
                      </Media.Body>
                      {(selectData.removeBook) ? <AddOrRemoveBook bookId={book.bookId} listName={selectData.title} functionality={'remove'} />: <></>}
                    </Media> */}
                  {/* <Card
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
                  </Card> */}
                  <Figure
                    style={{ width: '8rem',  }}
                    >
                    <Link onClick={() => { setBook(book) }} to={`/book/${book.bookId}`}>
                      <FigureImage style={{
                      height: 200,
                    }} src={book.thumbnail} />
                    </Link>
                      <FigureCaption>{book.title}</FigureCaption>
                      <FigureCaption>{book.authors[0]}</FigureCaption>
                      {(selectData.removeBook) ? <AddOrRemoveBook bookId={book.bookId} listName={selectData.title} functionality={'remove'} />: <></>}
                  </Figure>
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