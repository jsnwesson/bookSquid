import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SearchResults from "./SearchResults.jsx";
import data from "./sampleData.js";

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
