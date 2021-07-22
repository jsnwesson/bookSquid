import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import AddOrRemoveBook from './AddOrRemoveBook';
import Paper from '@material-ui/core/Paper';
import { specificBookData } from '../../services/bookclubServices';
import '@fontsource/roboto';
import { useParams } from 'react-router';
import Review from '../../components/review/Review.jsx';



const BookInfo = (props) => {
  const { id } = useParams()
  const [book, setBook] = useState()

  useEffect(() => {
    specificBookData(id)
      .then((results) => {
        setBook(results[0])
      })
  }, [id])

  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      paddingTop: '75px',
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    },
    parentContainer: {
      display: 'flex',
      // width: '65%',
      justifyContent: 'center'
    },
    imageContainer: {
      paddingRight: '10%',
      marginRight: '10px',
      '@media (max-width: 900px)': {
        display: 'none',
      },
    },
    imageContainer2: {
      padding: '40px 40px 40px 40px',
      '@media (min-width: 900px)': {
        display: 'none',
      },
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    buttonRow: {
      width: '75%',
      paddingLeft: '25%'
    },
    titleRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    descriptionContainer: {
      width: '75%'
    },
    media: {
      // height: 'auto',
      maxHeight: '500px',
      width: '165%',
      maxWidth: '300px',
      boxShadow: '5px 5px 20px -5px gray',
      marginLeft: 'auto'
    },
    media2: {
      margin: 'auto',
      width: '50%',
      textAlign: 'center',
      height: 'auto',
      minHeight: '500px',
      width: 'auto%',
      maxWidth: '300px',
    },
    paper: {
      padding: '3%',
      backgroundColor: '#eae9e9'
    },
    paper2: {
      padding: '3%',
      marginTop: '50px',
      marginBottom: '50px',
      backgroundColor: '#eae9e9',
      paddingBottom: '50px',
    }
  }));
  const classes = useStyles();
  const image = book ? book.image : null;

  return (
    <>
      {book !== undefined
        ? <Grid container item className={classes.mainContainer} >
          <Grid container item className={classes.parentContainer}>
            <Grid container item direction='column' xs={3} className={classes.imageContainer}>
              <img
                className={classes.media}
                src={image}
                alt={book.title}
              />
            </Grid>
            <Grid container item direction='column' xs={8} >
            <Grid container item direction='column' xs={12} className={classes.imageContainer2}>
              <img
                className={classes.media2}
                src={image}
                alt={book.title}
              />
            </Grid>
              <Paper className={classes.paper} elevation={5}>
                <Grid >
                  <Grid container item direction='row' className={classes.titleRow}>
                    <Typography variant='h5'><b>{book.title}</b></Typography >
                    <Typography variant='h5'>{book.genre}</Typography>
                  </Grid>
                  <Grid container item direction='row'>
                    <Typography variant='h5'>Published: <b>{book.publishedDate}</b></Typography>
                  </Grid>
                </Grid>
                <Grid container item direction='column'>
                  <Grid direction='row'>
                    <Typography variant='h5'>{book.authors.join(', ')}</Typography>
                  </Grid>
                  <Grid direction='row' className={classes.titleContainer}>
                    <Typography className={classes.descriptionContainer} variant='subtitle1'>{book.description}</Typography>
                  </Grid>
                  <Grid direction="row" className={classes.buttonRow}>
                    <AddOrRemoveBook
                      bookId={book.bookId}
                      functionality={'both'}
                      isLoggedIn={props.isLoggedIn}
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper2} elevation={5}>
                <Review id={id} isLoggedIn={props.isLoggedIn} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        : null}
    </>
  )
}

export default BookInfo;