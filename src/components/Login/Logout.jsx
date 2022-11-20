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
        

        

     

       

        <div className="d-grid">
          <button disabled={ loading || !currentUser } onClick={handleLogout} >
            Submit
          </button>
        </div>
      
      </form>
    )
  }

