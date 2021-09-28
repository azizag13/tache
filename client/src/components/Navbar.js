import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/action.auth';
import './navbar.css';

const Navbar = ({ isAuthenticated, logout }) => {
  const authorizedLinks = (
    <>
      <li class= "nav-item">
        <Link class="nav-link active" to="/" onClick={logout}>
          Logout
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <Fragment>
      <ul class="nav">
      <li class="nav-item">
        <Link class="nav-link active" to="/login">Log In</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/signup">Sign Up</Link>
      </li>
      </ul>
    </Fragment>
  );

  return (
    <div class="navbar">
    <div class="back-bleu">
      
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link active" to="/">Home</Link>
          </li>
          {
            <Fragment>
              {isAuthenticated ? authorizedLinks : guestLinks}
            </Fragment>
          }
        </ul>
      
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
