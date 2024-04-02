// add_book.tsx
import React from 'react';
import './add_book.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';

function AddBookPage() {
  return (
    <div>
      <Navbar />
      <div className="addBookContent">
        {/* Your add book page content */}
        <h1>Add Book Page</h1>
        <p>This is where we add books.</p> {/* Simple text */}
      </div>
    </div>
  );
}

export default AddBookPage;