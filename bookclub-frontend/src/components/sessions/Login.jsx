import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import fire from '../../fire.js';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((userRecord) => {
        console.log('Successfully logged in user:', userRecord.user.email);
        console.log('UID for user is: ', userRecord.user.uid);
      })
      .catch((error) => {
        alert('Incorrect username or password');
      });
    console.log(`submitted email: ${email} password: ${password}`);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) =>
            setEmail(target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="current-password"
          onChange={({ target }) =>
            setPassword(target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">
          Sign in
        </button>
      </form>
      <Link to="/create-user">
        <Button>
          Create New User
        </Button>
      </Link>
    </div>
  )
};

export default Login;
