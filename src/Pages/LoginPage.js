import React from 'react'
import {Link,useNavigate} from'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk_gyJQ2sgRfkRsgKx8-j6h785rzgABb8",
  authDomain: "solruf-d928e.firebaseapp.com",
  projectId: "solruf-d928e",
  storageBucket: "solruf-d928e.appspot.com",
  messagingSenderId: "269551656879",
  appId: "1:269551656879:web:e735f05cda4bb9cc47195a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const LoginPage = () => {
  const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logged in");
        navigate('/homepage');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Credentials")
      });
  }


  return (
    <div className="container">
      <main className="signup-container">
        <h1 className="heading-primary"><span className="span-blue">Log In</span></h1>
        <p className="text-mute">Enter your credentials to access your account.</p>
        <div className="login-wrapper">
          
          <div className="line-breaker">
            <span className="line"></span>
            <span>or</span>
            <span className="line"></span>
          </div>
        </div>
        <form className="signup-form">
          <label className="inp">
            <input type="email" className="input-text" id="email" placeholder="&nbsp;" />
            <span className="label">Email</span>
            <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
          </label>
          <label className="inp">
            <input type="password" className="input-text password" placeholder="&nbsp;" id="password" />
            <span className="label">Password</span>
            <span className="input-icon input-icon-password" data-password><i className="fa-solid fa-eye"></i></span>
          </label>
          <button className="btn btn-login" onClick={(e)=>handleLogin(e)}>Login</button>
        </form>
        <p className="text-mute">Not a member? <Link to="/signup">Sign up</Link></p>
      </main>
      <div className="welcome-container">
        <h1 className="heading-secondary">Welcome to <span className="lg">SOLRUF!</span></h1>
        <img src="https://www.rccd.edu/admin/ed_services/it/PublishingImages/INFO_TECH_HERO.jpg" alt="" />
      </div>
    </div>
  )
}

export default LoginPage