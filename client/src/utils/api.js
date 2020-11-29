/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";


export default {
    // Gets all books
    getBooks: function (q) {
        return axios.get("/api/google", { params: { q: "title:" + q } });
    },
    // Gets all the saved books
    getSavedBook: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
