import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { searchByCategory } from '../../services/bookclubServices.js'
import searchBackdrop from './assets/SearchBackdrop.jpeg'


const useStyles = makeStyles((theme) => ({
  buttons: {
    color: '#004d86',
    backgroundColor: '#fee4ea'
  },
  backdrop: {
    backgroundImage: `url(${searchBackdrop})`,
    backgroundSize: 'contain',
    height: '45vh'

  },
}))



const LandingSearch = (props) => {

  const [searchInput, setSearchInput] = useState((''))
  // const [Category, setCategory] = useState('')

  const classes = useStyles()

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
    console.log(searchInput);
  }

  // const handleCategorySelect = (e) => {
  //   setCategory(e.target.value);
  // }

  const handleSearchSubmit = () => {
    if (searchInput) {
      searchByCategory(null, searchInput)
        .then((results) => {
          props.setSearchResults(results)
        })
    }
  }

  return (

    <Container fluid id="landingSearch" >
      <div >
        <Row id="landingSearch" className={`align-items-center justify-items-center ${classes.backdrop}`}>
          <Col xs={3}>
          </Col>
          <Col xs={6}>
            <Form >
              <FormControl
                style={{ padding: "12px", marginBottom: "3vh" }}
                type="text"
                placeholder="Search Books, Authors or Genres!"
                onChange={handleInputChange}
              ></FormControl>
              {searchInput
                ? <Link to='/search'>
                  <Button className={classes.buttons} onClick={handleSearchSubmit}>Search Books</Button>
                </Link>
                : <Button className={classes.buttons} disabled onClick={handleSearchSubmit}>Search Books</Button>
              }
            </Form>
          </Col>
        </Row>
      </div>
    </Container>

  )
}

export default LandingSearch;