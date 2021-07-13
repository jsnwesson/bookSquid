import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {postBookReview} from '../../services/bookclubServices.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    maxWidth: 750,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


const SearchResults = (props) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.image} alt="bookSearch" src={props.thing.volumeInfo.imageLinks.thumbnail}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                  {props.thing.volumeInfo.title}
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  By:
                </Typography>
                <Typography variant="body2" color="textSecondary" align="left">
                  {props.thing.volumeInfo.authors[0]}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} align="left">
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">rating</Typography>
            </Grid>
            </Grid>
          </Grid>
      </Paper>
    </div>
  )
}


export default SearchResults;;