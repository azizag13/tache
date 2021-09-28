import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from '../../actions/action.auth';
import './signup.css'

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [signupData, SetSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = signupData;

  const onChange = (e) =>
    SetSignupData({ ...signupData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
    setAccountCreated(true);
  };

  //check authentication
  if (isAuthenticated) {
    return <Redirect to="/sample" />;
  }

  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  return (
    <div class="signup">
      <div class="logee">
      <h1>Sign Up to your create an account</h1>
      <form class="row g-3" onSubmit={(e) => onSubmit(e)}>
      <label for="inputEmail4" class="form-label"><b>Name</b></label>
        <input
        class="form-control"
          type="text"
          placeholder="Your name here"
          name="name"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <label for="inputEmail4" class="form-label"><b>E-mail</b></label>
        <input
        class="form-control"
          type="email"
          placeholder="Your email here"
          name="email"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <label for="inputEmail4" class="form-label"><b>Password</b></label>
        <input
        class="form-control"
          type="password"
          placeholder="Your password here"
          name="password"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <button class="btn btn-primary" type="submit">Create New Account</button>
      </form>
      <br />
      <br />
      <br />
      <h6>
        Already have an account?<Link to="/login">Login</Link>
      </h6>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
