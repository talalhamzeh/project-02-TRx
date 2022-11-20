// to get the result from the input we use useref 
import { useRef, useState } from "react";
import { signup, login ,logout ,useAuth} from "./firebase"; 

export default function App() {
  const [ loading, setLoading ] = useState(false);
  //return from the custom hook 
  // set curretn user auth in the firebaser
  const currentUser = useAuth(); 




  const emailRef = useRef();
  const passwordRef = useRef();
  // we made this async signup is gonna retun a prom as it in the retunr create

  
  async function handleLogin() {
   
    await login(emailRef.current.value, passwordRef.current.value);
  
    setLoading(false);
  }
  async function handleSignup() {
   
    await signup(emailRef.current.value, passwordRef.current.value);
  
    setLoading(false);
  }

  async function handleLogout() {
   
    await logout();
  
    setLoading(false);
  }

//if loading is true we disable the button 

  return (
    <div id = "main"> 
    <div>
    <div>Currently logged in as: { currentUser?.email } </div>
    </div>

      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
      <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>

      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>

    </div>


  );
}


