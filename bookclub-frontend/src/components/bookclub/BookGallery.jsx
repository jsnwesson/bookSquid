import React from 'react';
import Slider from 'react-slick';
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


const UseStyles = makeStyles(() => ({
  root: {
    maxWidth: 200,
    boxShadow: '0 0 5px 0 gray'
  },
  media: {
    height: 300,
  },
  content: {
    marginTop: '30px',
  },
  booksContainer: {
    // border: '2px solid red',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 15px -10px black',
    backgroundColor: '#e8e8e8',
    margin: '1.5vh',
    padding: '3vh'

  },
  emptyContainer: {
    minHeight: '10vh'
  },
  titles: {
    font: 'robot sans-serif',
    marginBottom: '3vh',
    padding: '0vh 1vh 1vh 6vh',
    textAlign: 'left',
    borderBottom: '1px solid gray'

  },
  book: {

  },
  empty: {
    height: '25hv'
  }
})
);


const withSlide = (wrappedComponent, selectData, setBook) => {
  var settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  const classes = UseStyles();
  if (selectData.list.length === 0) {
    return (
      <div>
        <Grid item className={classes.booksContainer}>
          <h2 className={classes.titles}>{selectData.title}</h2>
          <h3>It appears that there are no books added to this list!</h3>
        </Grid>
      </div>
    )
    // } else if (selectData.list.length < 3) {
    //   return (
    //     <div>
    //       <Grid item >
    //         <h2>{selectData.title}</h2>
    //       </Grid>
    //     </div>
    //   )
  } else {
    return (
      <div >
        <Grid item className={classes.booksContainer}>
          <h2 className={classes.titles}>{selectData.title}</h2>
          <Slider className={`slider ${classes.container}`} {...settings}>
            {selectData.list.map((book) => {
              return (
                <div key={book.bookId} className={classes.cardContainer}>
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
                      {(selectData.removeBook) ? <AddOrRemoveBook bookId={book.bookId} listName={selectData.title} functionality={'remove'} /> : <></>}
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