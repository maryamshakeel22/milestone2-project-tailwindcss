import Link from 'next/link'
import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <header className="header">
          <a href="#" className="logo">
            <span>Maryam</span>
          </a>
          <nav className="nav-links">
            <Link href="#Hero" className="nav-link">Home</Link>
            <Link href="#About" className="nav-link">About</Link>
            <Link href="#Skills" className="nav-link">Skills</Link>
            <Link href="#Contact" className="nav-link">Contact</Link>
          </nav>
          <a href="#Contact" className="button">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="icon"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </header>
    </div>
  );
};

export default Navbar;
