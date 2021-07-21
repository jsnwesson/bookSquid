import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { Link } from 'react-router-dom';
import AddOrRemoveBook from './AddOrRemoveBook';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bookclub.css';
import '@fontsource/roboto';


const UseStyles = makeStyles(() => ({
  titles: {
    font: 'roboto, sans-serif',
    fontWeight: 500,
    fontSize: '20pt',
    margin: '3vh 0 2vh 0',
    padding: '0vh 1vh 1vh 6vh',
    textAlign: 'left',
    borderBottom: '1px solid gray',
    color: '#004D86'

  },
  booksContainer: {
    borderRadius: '4px',
    boxShadow: 'inset 0 0 18px -8px black',
    backgroundColor: '#faf5f6', //'#e8e8e8',
    padding: '2vh'
    // border: '2px solid red',

  },
  slider: {
    // border: '2px solid green',
    // backgroundColor: '#f0edee',
    // boxShadow: 'inset 0 0 15px -7px gray'

  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '40vh',
    // border: '2px solid red',
    // height: '40vh'

  },
  card: {
    height: '100%',
    margin: '15px',
    padding: '20px',
    boxShadow: '1px 2px 15px -4px gray',
    alignItems: 'center',
    borderRadius: '10px',
    maxWidth: '15vw',
    maxHeight: '45vh',
    overflow: 'auto',
    minWidth: '10vh',
    // overflow: 'auto'
    // border: '2px solid blue',
  },
  content: {
    height: '100%',
    marginTop: '30px',
    // border: '5px solid red'
  },
  media: {
    minHeight: '50px',
    height: '275px',
    boxShadow: '0 0 15px -6px gray'
    // padding: '20px',
    // margin: '10px',
  },
  textContainer: {
    borderTop: '1px solid gray',
    marginTop: '20px'
    // border: '2px solid purple',

  },
  bookTitle: {
    fontSize: '14pt',
    // border: '2px solid orange'
  },
  author: {
    // border: '2px solid pink'
  },
  emptyContainer: {
    height: '475px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '2px solid black'
  },
})
);


const withSlide = (wrappedComponent, selectData, setBook) => {
  var settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 100,
    slidesToShow: (selectData.list.length > 4) ? 4 : selectData.list.length,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1300,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 4,
      //     infinite: true,
      //   }
      // },
      // {
      //   breakpoint: 1000,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //     infinite: true,
      //   }
      // },
      // {
      //   breakpoint: 950,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     infinite: true,
      //   }
      // }
    ]
  };
  const classes = UseStyles();
  if (selectData.list.length === 0) {
    return (
      <div>
        <h2 className={classes.titles}>{selectData.title}</h2>
        <Grid container item className={`${classes.booksContainer} ${classes.emptyContainer}`} >
          <Grid cotainer direction='column' item style={{ padding: '3% 3% 3% 5%', backgroundColor: '#ebe8e9', boxShadow: '0 0 9px -4px gray' }}>
            <Grid item >
              <PriorityHighIcon style={{ fontSize: '42pt', opacity: '50%', marginBottom: '8%' }} />
            </Grid>
            <Grid item >
              <span style={{ fontSize: '15pt' }}>It appears you haven't added any books to this list!</span>
            </Grid>
          </Grid>
        </Grid>
      </div >
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
        {/* Title */}
        <h2 className={classes.titles}>{selectData.title}</h2>

        {/* Entire Container */}
        <Grid item className={classes.booksContainer}>


          {/* Slider */}
          <Slider className={`slider ${classes.slider}`} {...settings}>
            {selectData.list.map((book) => {
              return (

                // Card Container
                <div key={book.bookId} className={classes.cardContainer}>

                  {/* Card */}
                  <Card className={classes.card}>
                    <CardActionArea>
                      <Link onClick={() => { setBook(book) }} to={`/book/${book.bookId}`}>

                        {/* Card Media */}
                        <CardMedia
                          className={classes.media}
                          image={book.thumbnail}
                          title={book.title}
                        />
                      </Link>

                      {/* Text Container */}
                      <CardContent className={classes.textContainer}>

                        {/* Book Title */}
                        <Typography className={classes.bookTitle} gutterBottom variant="h5" component="h2">
                          {book.title}
                        </Typography>

                        {/* Book Author */}
                        <Typography className={classes.author} variant="body2" color="textSecondary" component="p">
                          {book.authors[0]}
                        </Typography>
                      </CardContent>
                      {(selectData.removeBook) ?
                        <AddOrRemoveBook
                          bookId={book.bookId}
                          book={book}
                          removeFunc={selectData.setter}
                          list={selectData.list}
                          listName={selectData.title}
                          functionality={'remove'} /> : <></>}
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