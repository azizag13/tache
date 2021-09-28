import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from '../../actions/action.auth';
import './login.css'

const Login = ({ login, isAuthenticated }) => {
  const [loginData, SetLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = loginData;

  const onChange = (e) =>
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    login(name, email, password);
  };

  //check authentication
  if (isAuthenticated) {
    return <Redirect to="/sample" />;
  }

  return (
    <div class="login">
      <div class="loge">
      <h1>Sign In to your account</h1>
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
                                    
        <label for="inputEmail4" class="form-label"><b>E-mail</b></label>
        <input
         class="form-control"
          type="email"
          placeholder="Your email here"
          name="email"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        
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
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
      <br />
      <br />
      <br />
      <h6>
        Dont have account?<Link to="/signup">Create Account</Link>
      </h6>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
