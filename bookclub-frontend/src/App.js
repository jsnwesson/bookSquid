import React, { useState } from 'react';
import fire from './fire';
import Login from './components/sessions/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListReadBooks from './components/bookclub/ListReadBooks';
import AddBook from './components/bookclub/AddBook';
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
                <a href="signout">Sign out</a>
              </span>
              <Switch>
                <Route path="/add-book">
                  <AddBook />
                </Route>
                <Route path="/">
                  <ListReadBooks />
                </Route>
              </Switch>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
