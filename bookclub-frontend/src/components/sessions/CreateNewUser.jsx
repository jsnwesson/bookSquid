import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import fire from '../../fire.js';

const CreateNewUser = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((userRecord) => {
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