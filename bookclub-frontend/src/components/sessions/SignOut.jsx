import React from 'react';
import fire from '../../fire';
import { Button } from 'react-bootstrap';

const SignOut = (props) => {
  const signOut = () => {
    fire.auth().signOut()
      .then(() => {
        props.removeEmailCookie('email');
        props.removeUidCookie('UID');
      })
  };

  return (
    <div>
      <Button onClick={signOut}>
        Sign out
      </Button>
    </div>
  );
}
export default SignOut;
