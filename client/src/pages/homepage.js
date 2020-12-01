import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class HomePage extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    q: ""
  }
  // Load all books and store them with setBooks

// Loads all books and sets them to books
getBooks = ()=> {
  API.getBooks(this.state.q)
    .then(res => 
      this.setState({
        books: res.data
      })
    )
    .catch(err => console.log(err));
};


// Handles updating component state when the user types into the input field
handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  })
};

// When the form is submitted, use the API.saveBook method to save the book data
// Then reload books from the database
handleFormSubmit = (event) => {
  event.preventDefault();
  this.getBooks();
};
render(){


  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={this.handleInputChange}
              name="q"
              type="text" 
              value={this.state.q}
              placeholder="Title (required)"
            />

            <FormBtn
              onClick={this.handleFormSubmit}
            >
              Submit Book
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {/* {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link> */}
                  {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                {/* </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )} */}
        </Col>
      </Row>
    </Container>
  );
}
}

export default HomePage;