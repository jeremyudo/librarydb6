"use client";
import React, { useEffect, useState, useRef } from 'react';
import './addBook.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from "@/styles/Home.module.scss";


function AddBookPage() {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const [books, setBooks] = useState([]);

  const bookISBNRef = useRef(); // Ref for car year input
  const bookTitleRef = useRef();
  const bookAuthorRef = useRef(); // Ref for car model input


  const [created, setCreated] = useState(false);



  async function addBook() {
    // Implement functionality to add book to database
    const bookISBN = bookISBNRef.current.value.trim();
    const bookTitle = bookTitleRef.current.value.trim(); // Get model value
    const bookAuthor = bookAuthorRef.current.value.trim(); // Get year value

    // Validate input
    if (bookISBN.length < 3 || bookTitle.length === 0 || bookAuthor.length === 0) return;
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ISBN: bookISBN,
        Title: bookTitle, // Include model in request body
        Authors: bookAuthor, // Include year in request body
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/books`,
      postData
    );
    const response = await res.json();
    console.log(response);
    if (response.response.message !== "success") return;
    const newbook = response.response.book;
    setBooks([
      ...books,
      {
        ISBN: newbook.ISBN,
        Title: newbook.Title,
        Authors: newbook.Authors
      },
    ]);
    setCreated(true);
  };

  async function getBooks() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/books`,
      postData
    );
    
    const response = await res.json();
    console.log(response.books);
    setBooks(response.books);   
  };

  const updateBook = () => {

  };

  const deleteBook = () => {

  };


  useEffect(() => {
    getBooks();
  },[]);

  return (
    <div>
      <Navbar />
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className={styles.read}>
        <h2>Read</h2>
        <div className={styles.books}>
          {books.map((item, index) => {
            return (
              <div key={item.ISBN} className={styles.book}>
                <span>ISBN</span>: {item.ISBN} {" "}
                <span>Title</span>: {item.Title} {" "}
                <span>Author</span>: {item.Authors} {" "}
                <br /> 
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className="addBookContent">
        <div className="formContainer">
          <h1 id="heading">Add Book</h1>
          <div className="inputGroup">
            <label htmlFor="isbnInput">ISBN:</label>
            <input 
              type="text" 
              ref={bookISBNRef}
              id="isbnInput" 
              name="isbn"
              value={isbn} 
              onChange={(e) => setIsbn(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="titleInput">Title:</label>
            <input 
              type="text"
              ref={bookTitleRef} 
              id="titleInput" 
              name="title"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="authorsInput">Authors:</label>
            <input 
              type="text"
              ref={bookAuthorRef} 
              id="authorsInput" 
              name="authors"
              value={authors} 
              onChange={(e) => setAuthors(e.target.value)} 
            />
          </div>
          <button onClick={addBook}>Add Book</button>
        </div>
      </div>
    </div>
  );
}

export default AddBookPage;
