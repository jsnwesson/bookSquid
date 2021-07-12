import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SignOut from '../components/sessions/SignOut';

const Profile = (props) => {
  return (
    <div>
      <>
        <SignOut
          removeEmailCookie={props.removeEmailCookie}
          removeUidCookie={props.removeUidCookie}
          setIsLoggedIn={props.setIsLoggedIn}
        />
        <h1>Profile Page (only is accesible to someone who is logged in)</h1>
        <Link to='/search'>
          <Button>
            Search Page
          </Button>
        </Link>
        <Link to="/">
          <Button>
            Home Page
          </Button>
        </Link>
        <Link to="/book/">
          <Button>
            Book page
          </Button>
        </Link>
        <h3>things that go on the profile page should be here and is only for a user that is logged into an account</h3>
      </>
    </div>
  )
}
export default Profile