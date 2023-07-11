import React, { useState } from "react";
import '../Assets/styles/Login.css';
import { Link } from 'react-router-dom';
import login_pic from "../Assets/login_pic.jpg";
import { useDispatch } from "react-redux";
import { login} from "../Features/userSlice";
export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
   
    dispatch(
      login({
       
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    setEmail("");
    setPassword("");
  };

  return (
    <div className="main">
      <img src={login_pic} alt="Logo" className="llogo" />
      <div className="login">
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <h2>Login</h2>
      <div>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
      </div>
 
      <div>
      <label>
        <input 
          type="password" 
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      </div>
      <div>
      <button disabled={!validateForm()}>Click</button>

      </div>
     </form>
      <p style={{marginLeft:"40px"}}>Don't you have an account? <Link to ="/Register">SignUp</Link> </p>
</div>
    </div>
  );

  }