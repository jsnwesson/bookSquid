import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchResults from "./SearchResults.jsx";


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
