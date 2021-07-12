import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import fire from '../../fire.js';

const CreateNewUser = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [uidCookie, setUidCookie] = useCookies(['UID']);
  const [emailCookie, setEmailCookie] = useCookies(['email']);

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((userRecord) => {
        let d = new Date();
        d.setTime(d.getTime() + (60 * 60 * 1000));
        setUidCookie('UID', userRecord.user.uid, true, { path: '/', expires: d });
        setEmailCookie('email', userRecord.user.email, true, { path: '/', expires: d })
        console.log('Successfully created new user:', userRecord.user.email);
        console.log('UID created for new user is: ', userRecord.user.uid);
      })
      .catch((error) => {
        alert(error.message)
      });
  };

  return (
    <div>
      <Link to="/">
        <Button>
          Home Page
        </Button>
      </Link>
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) =>
            setEmail(target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={({ target }) =>
            setPassword(target.value)}
          placeholder="Password"
        />
        <br />
        <Button type="submit">
          Create New User
        </Button>
      </form>
    </div>
  )
};


export default CreateNewUser;