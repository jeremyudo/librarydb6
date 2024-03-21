"use client"

import { NextFetchEvent } from 'next/server';
import React, { useState } from 'react';
import './styles/MainPage.css'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: any) => {
    event.preventDefault();
    console.log('Searching for', searchTerm);
    // Implement search functionality here
  };

  return (
    <div className="homeContent">
      <h1>Welcome to Our Library</h1>
      <p>This is the home page. Navigate to the Library to see our collection.</p>
      <form className="searchForm" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search books, digital media, etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default HomePage;