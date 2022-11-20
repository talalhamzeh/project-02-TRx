import React from 'react'
import { useRef, useState } from "react";
import { login ,useAuth} from "./firebase"; 

import './loginpage.css'; 






    export default function Login() {
       
        const [ loading, setLoading ] = useState(false);
        //return from the custom hook 
        // set curretn user auth in the firebaser
        const currentUser = useAuth(); 
    
        const emailRef = useRef();
        const passwordRef = useRef();
        // we made this async signup is gonna retun a prom as it in the retunr create
        
        
        async function handleLogin(e) {
            e.preventDefault();
           
            

            setLoading(true);
    
            await login(emailRef.current.value, passwordRef.current.value);
        
        setLoading(false);
        }
        

       
        return (
      <form>
        <h3>Sign In</h3>
        <div>
            <div>Currently logged in as: { currentUser?.email } </div>
            </div>

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
          <button disabled={ loading || currentUser } onClick={handleLogin} className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Not Registered  <a href="/signup">Sign up</a>
        </p>
      </form>
    )
  }

