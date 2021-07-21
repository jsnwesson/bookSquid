import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


const useStyles = makeStyles((theme) => ({

  root: {

    position: 'relative',
    flexGrow: 1,
    margin: '9% 0 5% 0'
    // left: '-70%',
    // marginTop: '8%',
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 400,
    // margin: 'auto',

  },
  image: {
    width: 128,
    height: 128,

  },
  img: {
    margin: 'auto',
    padding: '0px -50px 15px 0',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '80%',
    borderRight: '1px solid gray',
  },
  large: {
    maxWidth: '55%',
    borderRadius: '50%',
    // width: theme.spacing(7),
    // height: theme.spacing(7),
    // border: '2px solid red',

  },
}));

const User = (props) => {
  const classes = useStyles();
  dayjs.extend(relativeTime)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
          <Grid className={classes.img} item xs={5}>
            <img alt="user" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className={classes.large} />
          </Grid>
          <Grid item direction="column" style={{ textAlign: 'left', marginLeft: '15px', marginRight: '15%' }}>
            <Grid item >
              <Typography variant="h5" style={{ font: 'Robot, sans-serif', fontSize: '20pt' }}>
                {props.user}
              </Typography>
            </Grid>
            <Grid item>
              <Typography >
                Total Books Read: <b>{props.previouslyRead.length}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="textSecondary">
                joined {dayjs(props.joinedDate).fromNow(true)} ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default User;