"use client"

//CHECK THE BOOK IMAGES AND TITLE STUFF

//import { NextFetchEvent } from 'next/server';
import axios from "axios"
import React, { useState } from 'react';
//import React, { useEffect, useState } from 'react';
import './styles/MainPage.css'
import { Student } from '@/types';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  // Sample data for top reads; replace these URLs with your actual image URLs
  const [topReads, setTopReads] = useState([  
    { id: 1, imgSrc: './images/book1.jpeg', title: 'Book 1 Title' },
    { id: 2, imgSrc: './images/book2.jpeg', title: 'Book 2 Title'},
    { id: 3, imgSrc: './images/book3.jpeg', title: 'Book 3 Title'},
  ]);

  
  
  const handleSearch = (event: any) => {
    event.preventDefault();
    console.log('Searching for', searchTerm);
    // Implement search functionality here
  };

  return (
    <div className="homeContent">
      <h1 className="welcome">Welcome to Our Library</h1>
      <h1 className="searchText">Search for Resources</h1>
      <form className="searchForm" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search books, digital media, etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="topReads">
        <h2 className="topReadsText">Top Reads</h2>
        <div className="topReadsGallery">
          {topReads.map((book) => (
            <div key={book.id} className="book">
              <img src={book.imgSrc} alt={book.title} />
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="info">
        <h1 className="aboutHead">About</h1>
      <p className="aboutText">Welcome to the University of Houston Library, your gateway to knowledge, innovation, and academic success. As an integral part of the esteemed University of Houston community, our library is dedicated to advancing scholarship, fostering creativity, and empowering individuals to excel in their academic and professional pursuits.

With a rich history spanning decades, our library offers extensive collections covering a wide array of subjects, both in print and digital formats. Our expert librarians and staff are committed to promoting information literacy and lifelong learning, providing personalized assistance and access to cutting-edge technologies.

Beyond serving as a repository of knowledge, we are a vibrant center for collaboration and innovation. Through partnerships with faculty, students, and external organizations, we facilitate interdisciplinary research, creative endeavors, and community engagement initiatives that enrich the intellectual life of our campus and beyond.

Whether you're conducting research, seeking scholarly resources, or exploring new ideas, we invite you to discover the wealth of resources and opportunities available at the University of Houston Library. Join us on a journey of discovery, exploration, and lifelong learning as we shape the future of education and scholarship together.

Welcome to your library.</p>
      </div>
    </div>
  );
}

export default HomePage;