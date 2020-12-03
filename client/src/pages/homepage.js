import React, { useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function HomePage() {
  
  const [searchBooks, setSearchBooks] = useState([])
  
  const [query, setQuery] = useState("")

// When the form is submitted, use the API.saveBook method to save the book data
// Then reload books from the database
const handleFormSubmit = (event) => {
  event.preventDefault();
  if (!query) {
    return false
  }
  API.getBooks(query).then(({data})=> {
    const bookData = data.items.map((book)=> ({
      googleId: book.id,
      authors: book.volumeInfo.authors,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }));
    console.log(bookData)
    setSearchBooks(bookData)
  }) 
  .then(()=> setQuery(""))
  .catch((err)=> console.log(err))
};
const handleBookSave = (googleId) => {
  const savedBook = searchBooks.find((book)=> book.googleId === googleId)
  API.saveBook(savedBook).then(()=> console.log("book saved")).catch((err)=> console.log(err))
}

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={(event)=> setQuery(event.target.value) }
              name="query"
              value={query}
              placeholder="Title (required)"
            />

            <FormBtn
              onClick={handleFormSubmit}
          
            >
              Submit Book
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {searchBooks.length ? (
            <List>
              {searchBooks.map(book => (
                <ListItem key={book.googleId}>
                  <img src={book.image}/>
                  <Link to={book.link}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
          <saveBtn onClick={() => handleBookSave(book.googleId)} />
          </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;