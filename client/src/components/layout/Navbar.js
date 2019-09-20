import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/about'>{title} </Link>
        <i className={icon} />
      </h1>

      <ul>
        <li>
          <Link to='/'>Search Foods</Link>
        </li>
        <li>
          <Link to='/add'>Add Food</Link>
        </li>
        <li>
          <Link to='/about'>Register</Link>
        </li>
        <li>
          <Link to='/about'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Dog Eats',
  icon: 'fas fa-bone'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
