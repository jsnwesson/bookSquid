import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';


const Search = (props) => {

  const [searchInput, setSearchInput] = useState((''))
  const [Category, setCategory] = useState('')

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
    console.log(searchInput);
  }

  const handleCategorySelect = (e) => {
    setCategory(e.target.value);
  }

  //on searchSubmit


  return (

      <Container  fluid id="landingSearch">
        <Row id="landingSearch" className="align-items-center justify-items-center">
          <Col xs={3}></Col>
          <Col xs={6}>
            <Form >
              <FormControl style={{padding: "12px", marginBottom: "3vh"}} type="text" placeholder="Search Books, Authors or Genres!" onChange={handleInputChange}></FormControl>
            </Form>
          </Col>
        </Row>
      </Container>

  )

}

export default Search;