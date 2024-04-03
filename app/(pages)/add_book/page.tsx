"use client"

//CHECK OUT NAVIGATE STUFF

import React, { useState } from 'react';
import './add_book.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';
import Link from 'next/link';

function AddBookPage() {
  const [isbn, setIsbn] = useState('');
  const [enteredIsbn, setEnteredIsbn] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(event.target.value);
  };

  const handleAddBook = () => {
    setEnteredIsbn(isbn);
    setIsbn('');
  };

  return (
    <div>
      <Navbar />
      <div className="addBookContent">
        <div className="formContainer">
          <div className="blackBar">
            <label htmlFor="isbnInput">ISBN:</label>
            <input 
              type="text" 
              id="isbnInput" 
              value={isbn} 
              onChange={handleInputChange} 
            />
          </div>
          <button onClick={handleAddBook}>Add Book</button>
        </div>
        <div className="displayContainer">
          <p>Entered ISBN:</p>
          <p>{enteredIsbn}</p>
        </div>
      </div>
    </div>
  );
}

export default AddBookPage;