import React, { useState } from 'react';
import fire from './fire';
import Login from './components/sessions/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ListReadBooks from './components/bookclub/ListReadBooks';
import AddBook from './components/bookclub/AddBook';
import CreateNewUser from './components/sessions/CreateNewUser';
import LandingPage from './components/landingPage/LandingPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

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

    <LandingPage />
    // <div className="App">
    //   <Router>
    //     {!isLoggedIn
    //       ? (
    //         <>
    //           <Switch>
    //             <Route path="/create-user">
    //               <CreateNewUser />
    //             </Route>
    //             <Route path="/">
    //               <Login />
    //             </Route>
    //           </Switch>
    //         </>
    //       )
    //       : (
    //         <>
    //           <Button onClick={signOut}>
    //             Sign out
    //           </Button>
    //           <Switch>
    //             <Route path="/add-book">
    //               <AddBook />
    //             </Route>
    //             <Route path="/">
    //               <ListReadBooks />
    //             </Route>
    //           </Switch>
    //         </>
    //       )}
    //   </Router>
    // </div>
  );
}

export default App;
