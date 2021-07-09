import React, { useState } from 'react';
import fire from './fire.js';
import Login from './components/sessions/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  const signOut = () => {
    fire.auth().signOut()
  };

  return (
    <div className="App">
      <Router>
        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </>
          )
          : (
            <>
              <span onClick={signOut}>
                <a href="#">Sign out</a>
              </span>
            </>
          )}
      </Router>
    </div>
  );
}


export default App;
