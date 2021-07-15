<<<<<<< HEAD
import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchResults from './SearchResults.jsx'
import data from './sampleData.js';
import {postBookReview, searchByCategory, getBookReviews, specificBookData, carouselMetaData} from '../../services/bookclubServices.js';
=======
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SearchResults from "./SearchResults.jsx";
import data from "./sampleData.js";
>>>>>>> 38a12009e91598c91194f65fd694ab59c8fc919e

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 10,
//     maxWidth: 750,
//   },
// }));
const Search = (props) => {
  //console.log("props: ", props);
  //const classes = useStyles();

  // useEffect(()=> {postBookReview('this book sucks lmao', 'title', 4, 'e_9MDwAAQBAJ')}, []);
  // useEffect(() => {searchByCategory('', 'bullshit')}, []);
  useEffect(() => {getBookReviews('e_9MDwAAQBAJ')}, []);
  // useEffect(() => {specificBookData('e_9MDwAAQBAJ')}, []);
  // useEffect(() => {carouselMetaData()}, []);
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Grid item xs>
            {props.searchResults.map((item) => {
              return <SearchResults thing={item} setBook={props.setBook} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
