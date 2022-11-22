import React from 'react'
import { useRef, useState } from "react";
import { login,logout ,useAuth} from "./firebase"; 

import './loginpage.css'; 
export default function Login(props) {
  const [ loading, setLoading ] = useState(false);
  const [error , setError] = useState(''); 
  const currentUser = useAuth(); 
  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleLogin() {
    setLoading(true);
    try{ 
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      props.history.push("/home")
    }
    catch (error) {
      console.log('passed')
      setLoading(false);
      setError ( ' invalid password ')
    }
  }
  return (
      <form>
        <h3>Sign In</h3>
        <div>
          <div>Currently logged in as: { currentUser?.email } </div>
        </div>

          <p> {error} </p>

        <div className="mb-3">
          <label>Email address</label>
          <input
            ref={emailRef}
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
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button disabled={ loading } onClick={handleLogin} className="btn btn-primary">
            Submit
          </button>
        </div>

        <p className="forgot-password text-right">
          Not Registered  <a href="/signup">Sign up</a>
        </p>
      </form>

  )
}

