import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import fire from '../../fire.js';

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);

  // const wrapper = React.createRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((userRecord) => {
        let d = new Date();
        d.setTime(d.getTime() + (60 * 60 * 1000));
        props.setUidCookie('UID', userRecord.user.uid, true, { path: '/', expires: d });
        props.setEmailCookie('email', userRecord.user.email, true, { path: '/', expires: d })
      })
      .catch((error) => {
        console.log('error: ', error);
        alert('Incorrect username or password');
      });
  }

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((userRecord) => {
        let d = new Date();
        d.setTime(d.getTime() + (60 * 60 * 1000));
        props.setUidCookie('UID', userRecord.user.uid, true, { path: '/', expires: d });
        props.setEmailCookie('email', userRecord.user.email, true, { path: '/', expires: d })
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setNewUser(false);
  };

  const doubleFunc = (e) => {
    handleSubmit(e);
    handleClose();
  };

  const newUserDoubleFunc = (e) => {
    handleNewUserSubmit(e);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Log In
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Log into your account</Modal.Title>
          {!newUser ? <Button onClick={setNewUser}>Create New User</Button> : null}
        </Modal.Header>
        <Modal.Body>
          <form>
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={!newUser ? doubleFunc : newUserDoubleFunc}>
            {!newUser ? 'Login' : 'Create Account'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
