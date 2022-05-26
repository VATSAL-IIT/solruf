import React, {useEffect,useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import profile from './t1.webp'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage , ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";
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
const storage = getStorage();
const auth = getAuth();
var usernm="";
 const Homepage = ({user,username,setusername}) => {
    const [photourl,setPhotourl]=useState(profile)
    const [photo,setPhoto]=useState(null);
    const navigate=useNavigate();
    const handleLogout=(e)=>{
        signOut(auth).then(() => {
            setusername(null);
            navigate('/signup')
          }).catch((error) => {
            alert("unknown error");
          });
          
    }
    const handleImageChange=(e)=>{
       if(e.target.files[0]);
       setPhoto(e.target.files[0]);
    }
    const handleChange=(e)=>{
         usernm=e.target.value;
    }
    const handleUsernameChange=(e)=>{
        setusername(usernm);
    }
     function handleImageClick(e){
        if(photo)
        {
        const photoRef=ref(storage,photourl);
        console.log(photoRef);
         uploadBytes(photoRef,photo).then(()=>{
             getDownloadURL(photoRef).then((url)=>{
                 setPhotourl(url);
             }).catch((err)=>{
                 console.log(err);
             })
         }).catch((err)=>{
            console.log(err);
        });
        alert("Profile Image has been changed successfully. Click OK and Wait for a second to view the changes.");
        }
        else
        alert("Please upload a file")
    }
    // useEffect(()=>{
    //     if(user && user.photoURL)
    //     setphotourl(user.photoURL)
    // })
    return (
        <>
            <header>
                <nav>
                    <div className="logo"><h1 className=""><a href="#">SOLRUF</a></h1></div>
                    <button className="logout" onClick={(e)=>handleLogout(e)}>Log Out</button>
                    <div className="menu">
                            <h3>Hi {username}</h3>   
                            <img className="avatar" src={photourl}/>                   
                    </div>
                </nav>
                <main>
                    <section>
                        <h3>Welcome To SOLRUF</h3>
                        <h1>Want an exciting avatar and username!!<span className="change_content"> </span></h1>
                        <p>Click to change.</p>
                        <input  type="file" onChange={(e)=>{handleImageChange(e)}}/>
                        <button className="btntwo" onClick={(e)=>{handleImageClick(e)}}>Change Profile Pic</button>  
                        <br/>
                        <br/>
                        <input type="text" id="username" onChange={(e)=>handleChange(e)} />
                        <button className="btntwo space"  onClick={(e)=>handleUsernameChange(e)}>Change Username</button>  
                    </section>
                </main>
            </header>
        </>
    )
}

export default Homepage