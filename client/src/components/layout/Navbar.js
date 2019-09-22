import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Navbar = ({ icon, title }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, admin } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/'>Search Foods</Link>
      </li>
      {admin ? (
        <li>
          <Link to='/add'>Add Food</Link>
        </li>
      ) : null}
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/'>Search Foods</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/about'>{title} </Link>
        <i className={icon} />
      </h1>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
