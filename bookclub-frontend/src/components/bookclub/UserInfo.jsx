import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} container direction="row">
            <Grid className={classes.img} item xs container direction="column">
                <img alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar2.png" className={classes.large} />
            </Grid>
            <Grid item xs direction="column">
              <Grid item xs direction="row">
                {/* <Typography variant="subtitle1" color="textSecondary">joined {props.userInfo.joinedDate}</Typography> */}
                <Typography variant="subtitle2" color="textSecondary">joined yesterday</Typography>
              </Grid>
              <Grid item xs direction="row">
                <Typography gutterBottom variant="h4">
                  {/* {props.userInfo.name} */}
                  Jane Doe
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {/* Total Books Read: {props.userInfo.lists.previouslyRead.length} */}
                  Total Books Read: 42
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default User;