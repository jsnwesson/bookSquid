import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import AddOrRemoveBook from "./AddOrRemoveBook";
import Rating from "@material-ui/lab/Rating";
import { Link, useHistory, useParams } from "react-router-dom";
import { addBookToMongo } from '../../services/bookclubServices';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#eae9e9",
    padding: theme.spacing(2),
    margin: 10,
    maxWidth: 750,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const SearchResults = (props) => {
  const classes = useStyles();
  const item = props.thing;
  let history = useHistory();
  const searchList = useParams()
  console.log(searchList)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item>
            <Link
              onClick={() => {
                addBookToMongo(item)
                  .then(() => {
                    history.push(`/book/${item.bookId}`)
                  })
              }}
            >
              <ButtonBase className={classes.image}>
                <img
                  className={classes.image}
                  alt="bookSearch"
                  src={item.image}
                />
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                  {item.title}
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  By:
                </Typography>
                <Typography variant="body2" color="textSecondary" align="left">
                  {item.authors}
                </Typography>
              </Grid>
              <Grid item>
                <AddOrRemoveBook
                //bookId={}
                //listName={}
                //functionality={"remove"}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Rating
                name="simple-controlled"
                value={item.totalRating}
                precision={0.25}
                size="medium"
                mt="20"
                readOnly
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SearchResults;
