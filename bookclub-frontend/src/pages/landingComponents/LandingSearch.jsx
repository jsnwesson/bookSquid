import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { searchByCategory } from '../../services/bookclubServices.js'
import searchBackdrop from './assets/SearchBackdrop.jpeg'


const LandingSearch = (props) => {

  const [searchInput, setSearchInput] = useState((''))
  // const [Category, setCategory] = useState('')

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
    console.log(searchInput);
  }

  // const handleCategorySelect = (e) => {
  //   setCategory(e.target.value);
  // }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInput) {
      searchByCategory(null, searchInput)
        .then((results) => {
          props.setSearchResults(results)
        })
    }
  }

  return (

    <Container fluid id="landingSearch" style={{ backgroundImage: 'src()' }}>
      <Row id="landingSearch" className="align-items-center justify-items-center">
        <Col xs={3}></Col>
        <Col xs={6}>
          <Form >
            <FormControl
              style={{ padding: "12px", marginBottom: "3vh" }}
              type="text"
              placeholder="Search Books, Authors or Genres!"
              onChange={handleInputChange}
            ></FormControl>
            <Link to='/search'>
              <Button onClick={handleSearchSubmit}>Search Now!</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default LandingSearch;