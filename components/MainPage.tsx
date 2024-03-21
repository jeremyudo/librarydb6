"use client"

import { NextFetchEvent } from 'next/server';
import axios from "axios"
import React, { useEffect, useState } from 'react';

import './styles/MainPage.css'
import { Student } from '@/types';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setstudents] = useState<Student[]>()


  useEffect(() => {
    axios
      .get<Student[]>(`/api/students`)
      .then((response) => {
        if (response.data) {
          setstudents(response.data);
        }
      })
      .catch((error) => {
        alert("error fetching data");
      });
  }, [students]);

  if (students?.length === 0) {
    return (
      <div>
        <h1 className="text-2xl mb-2">Your students</h1>
        <div className="mt-4 text-neutral-400">No students.</div>
      </div>
    );
  }



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
      <div className="flex flex-row">
        {students?.map((student) => (
          <div key={student.StudentID}>
            <div
              className="text-black"
            >
              {student.FirstName}
            </div>

            {/* <PlaylistTracks playlist_id={playlist.playlist_id} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;