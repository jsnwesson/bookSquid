import React, { useState } from 'react';
<<<<<<< HEAD
import fire from './fire';
import Login from './components/sessions/Login';
import Search from './components/bookclub/Search.jsx'
=======
>>>>>>> 66170ab40d1c81448459ac59b062885148e37899
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import SearchPage from './pages/search'
import Book from './pages/book';
import Landing from './pages/landing';
import Profile from './pages/profile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uidCookie, setUidCookie, removeUidCookie] = useCookies(['UID']);
  const [emailCookie, setEmailCookie, removeEmailCookie] = useCookies(['email']);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
            />
          </Route>
          <Route path="/book/">
            <Book
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
            />
          </Route>
          <Route path="/profile">
            <Profile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
            />
          </Route>
          <Route path="/">
            <Landing
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              uidCookie={uidCookie}
              setUidCookie={setUidCookie}
              removeUidCookie={removeUidCookie}
              emailCookie={emailCookie}
              setEmailCookie={setEmailCookie}
              removeEmailCookie={removeEmailCookie}
            />
          </Route>
        </Switch>
      </Router>
      <Search/>
    </div>
  );
}

export default App;
