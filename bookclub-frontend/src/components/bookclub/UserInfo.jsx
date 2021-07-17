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
    left: '-70%',
    flexGrow: 1,
    padding: '5%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 400,
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
  large: {
    // width: theme.spacing(7),
    // height: theme.spacing(7),
    maxWidth: '80%',
    borderRadius: '50%',
  },
}));

const User = (props) => {
  const classes = useStyles();
  dayjs.extend(relativeTime)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
          <Grid item xs={12} container direction="row">
            <Grid className={classes.img} item xs container direction="column">
                <img alt="user" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className={classes.large} />
            </Grid>
            <Grid item xs direction="column">
                <Typography gutterBottom variant="h4">
                  {props.user}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Total Books Read: {props.previouslyRead.length}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">joined {dayjs(props.joinedDate).fromNow(true)} ago</Typography>
            </Grid>
          </Grid>
      </Paper>
    </div>
  );
}

export default User;