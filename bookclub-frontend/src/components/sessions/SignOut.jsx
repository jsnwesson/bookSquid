import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
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
  const classes = useStyles()


  const signOut = () => {
    fire.auth().signOut()
      .then(() => {
        props.removeEmailCookie('email');
        props.removeUidCookie('UID');
      })
  };


  return (
    <div>
      <Link to='/'>
        <Button className={classes.buttons} onClick={signOut}>
          Sign out
        </Button>
      </Link>
    </div>
  );
}
export default SignOut;
