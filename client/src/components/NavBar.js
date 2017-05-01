import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav className="my-nav">
      <ul className="my-nav-flex">
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/home"> Articles </Link>
      </ul>
    </nav>
  )
}

export default NavBar;
