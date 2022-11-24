import React, { Component } from "react";
import { useRef, useState } from "react";
import { signup, useAuth } from "./firebase";
import "./loginpage.css";

export default function SignUp(props) {
  const [loading, setLoading] = useState(false);
  //return from the custom hook
  // set curretn user auth in the firebaser
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const displayNameRef = useRef();
  // we made this async signup is gonna retun a prom as it in the retunr create

  async function handleSignup() {
    setLoading(true);
    if (passwordRef.current.value === passwordConfirmationRef.current.value) {
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        displayNameRef.current.value
      );

      setLoading(false);

      props.history.push("/home");
    }
  }

  return (
    <div>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          ref={displayNameRef}
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          ref={emailRef}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          ref={passwordRef}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          ref={passwordConfirmationRef}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="d-grid">
        <button
          disabled={loading || currentUser}
          onClick={handleSignup}
          type="submit"
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </div>
  );
}
