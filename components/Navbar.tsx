"use client"
import Link from 'next/link';
import './styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <li className="homeButton">
          <Link href="/">Home</Link>
        </li>
        <li className="signInButton">
          <Link href="/signIn">Sign in</Link>
        </li>
        <li className="hours">
          Hours
        </li>
        <li className="events">
          Events
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;