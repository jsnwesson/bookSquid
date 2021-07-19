import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import fire from '../../fire';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  buttons: {
    color: '#004D86',
    backgroundColor: '#fee4ea'
  }
}))





const SignOut = (props) => {
  const [snackbarStatus, setSnackbarStatus] = useState(false)
  const classes = useStyles()


  const signOut = () => {
    fire.auth().signOut()
      .then(() => {
        props.removeEmailCookie('email');
        props.removeUidCookie('UID');
        snackbarOpen()
      })
  };

  const snackbarOpen = () => {
    setSnackbarStatus(true)
  }

  const snackbarClose = () => {
    setSnackbarStatus(false)
  }


  return (
    <div>
      <Snackbar
        open={snackbarStatus}
        message={'You have been logged out'}
        originAnchor={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5000}
        severity='info'
        onClose={snackbarClose}
      />
      <Link to='/'>
        <Button className={classes.buttons} onClick={signOut}>
          Sign out
        </Button>
      </Link>
    </div>
  );
}
export default SignOut;
