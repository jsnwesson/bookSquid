import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchResults from './SearchResults.jsx'
import data from './sampleData.js';
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

}));
const Search = (props) => {
  const [state, setState] = useState();
  const [search, setSearch] = useState();
  const classes = useStyles();

  useEffect(()=> {postBookReview('this book sucks lmao', 'title', 4, 'e_9MDwAAQBAJ')}, []);
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'>
        <Grid item xs={12}>
        <Paper className={classes.paper}>nav bar</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            filter
          </Paper>
        </Grid>
        <Grid item xs>
          {data.items.map(book => {
            return <SearchResults thing={book}/>
          })}
        </Grid>
      </Grid>
    </div>
  )
}


export default Search;;