import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col} from 'react-bootstrap';
import SignOut from '../components/sessions/SignOut';
import withSlide from '../components/bookclub/BookGallery.jsx';
import { favorites, previouslyRead, wantToRead } from '../dummyData/booklist.jsx';


const Profile = (props) => {
  let prevRead;
  let faves;
  let toRead;
  const faveList = {
    title: 'Favorites',
    className: 'fave',
    list: favorites, // <-- name of array of book objects
  };
  const prevList = {
    title: 'Previously Read',
    className: 'prevRead',
    list: previouslyRead,
  }
  const toReadList = {
    title: 'Want to Read',
    className: 'toRead',
    list: wantToRead,
  }

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
      <Container>
        <Row>
          <Col>
            {withSlide(faves, faveList, props.setBook)}
          </Col>
        </Row>
        <Row>
          <Col>
            {withSlide(prevRead, prevList, props.setBook)}
          </Col>
        </Row>
        <Row>
          <Col>
            {withSlide(toRead, toReadList, props.setBook)}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Profile