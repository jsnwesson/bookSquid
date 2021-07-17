import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SearchResults from "./SearchResults.jsx";
import { useParams } from "react-router-dom";
import { searchByCategory } from '../../services/bookclubServices.js';

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
  const [data, setData] = useState()
  const { searchTerm } = useParams()

  useEffect(() => {
    searchByCategory(searchTerm)
      .then((results) => {
        setData(results)
      })
  }, [searchTerm])

  return (
    <div>
      {data ?
        <div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Grid item xs>
                {data.map((item) => {
                  return <SearchResults thing={item} setBook={props.setBook} />;
                })}
              </Grid>
            </Grid>
          </Grid>
        </div> : null}
    </div>
  );
};

export default Search;
