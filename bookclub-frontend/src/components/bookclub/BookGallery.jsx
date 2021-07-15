import React from 'react';
import Slider from 'react-slick';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import AddOrRemoveBook from './AddOrRemoveBook';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bookclub.css';
import '@fontsource/roboto';


const UseStyles = makeStyles (() => ({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 300,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
})
);

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

  const classes = UseStyles();
  return (
    <div>
      <Grid item direction='row'>
        <h2>{selectData.title}</h2>
        <Slider className='slider' {...settings}>
          {selectData.list.map((book) => {
            return (
              <div key={book.bookId}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <Link onClick={() => { setBook(book) }} to={`/book/${book.bookId}`}>
                      <CardMedia
                        className={classes.media}
                        image={book.thumbnail}
                        title={book.title}
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {book.authors[0]}
                      </Typography>
                    </CardContent>
                      {(selectData.removeBook) ? <AddOrRemoveBook bookId={book.bookId} listName={selectData.title} functionality={'remove'} />: <></>}
                  </CardActionArea>
                </Card>
              </div>
            )
          })}
        </Slider>
      </Grid>
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