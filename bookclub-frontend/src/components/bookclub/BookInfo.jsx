import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import AddOrRemoveBook from './AddOrRemoveBook';

import '@fontsource/roboto';

const BookInfo = (props) => {
  /*
  console.log(props.book)
  * FOR API specificBookData(bookId)
  * response returns:
  *   status code 200
  *   response.data = {
  *     description: 'STRING',
  *     publishedDate: 'STRING',
  *     authors: [ 'STRING', ... ],
  *     genre: 'STRING',
  *     title: 'STRING',
  *     image: 'STRING', // this should be the larger image
  *   }

  Props (current) from BookGallery:
  - props.book.authors []
  - props.book.title
  - props.book.bookId
  - props.book.publishedDate
  - props.book.description
  - props.book.genre
  - props.book.thumbnail
  - props.book.img

  Props from Search:
  - props.book.gid
  */
  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      paddingTop: '75px',
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    },
    parentContainer: {
      display: 'flex',
      width: '75%',
      justifyContent: 'center'
    },
    imageContainer: {
      // backgroundColor: '#0dcaf0'
    },
    titleContainer: {
      // backgroundColor: '#20c997',
      // backgroundColor: 'yellow',
      display: 'flex',
      justifyContent: 'center',

    },
    buttonRow: {
      // backgroundColor: '#20c997',
      // backgroundColor: 'yellow',
      // display: 'flex',
      // justifyContent: 'center',
      width: '75%',
      paddingLeft: '25%'
    },
    titleRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    authorsContainer: {
      // backgroundColor: '#0d6efd'
    },
    descriptionContainer: {
      // backgroundColor: '#ffc107',
      width: '75%'
    },
    media: {
      height: '75%',
      maxHeight: '500px',
      width: '100%',
      maxWidth: '300px',
    },
  }));
  const classes = useStyles();
  const image = props.book.img;
  let authors = '';
  props.book.authors.forEach((author, i) => {
    if (i !== (props.book.authors.length - 1)) {
      authors += `${author}, `;
    } else {
      authors += author;
    }
  })
  return (
    <Grid container item className={classes.mainContainer}>
      <Grid container item className={classes.parentContainer}>
        <Grid container item direction='column' xs={3} className={classes.imageContainer}>
          <img
            className={classes.media}
            src={image}
            alt={props.book.title}
          />
        </Grid>
        <Grid container item direction='column' xs={8} >
          <Grid className={classes.authorsContainer}>
            <Grid container item direction='row' className={classes.titleRow}>
              <Typography variant='h5'><b>{props.book.title}</b></Typography >
              <Typography variant='h5'>{props.book.genre}</Typography>
            </Grid>
            <Grid container item direction='row'>
              <Typography variant='h5'>Published: <b>{props.book.publishedDate}</b></Typography>
            </Grid>
          </Grid>
          <Grid container item direction='column'>
            <Grid direction='row'>
              <Typography variant='h5'>{authors}</Typography>
            </Grid>
            <Grid direction='row' className={classes.titleContainer}>
              <Typography className={classes.descriptionContainer} variant='subtitle1'>{props.book.description}</Typography>
            </Grid>
            <Grid direction="row" className={classes.buttonRow}>
              <AddOrRemoveBook bookId={props.book.bookId} functionality={'both'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BookInfo;