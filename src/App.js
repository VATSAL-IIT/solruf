import {useState} from 'react'
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Homepage from './Pages/Homepage';
function App() {
  const [username,setUsername]=useState("");
  const [currentUser,setCurrentUser]=useState({});
  return (
    <div className="App">
    <Routes>
     <Route path="/" exact element={<SignupPage></SignupPage>}/>
     <Route path="/signup" exact element={<SignupPage currentuser={currentUser} setcurrentuser={setCurrentUser} setusername={setUsername}></SignupPage>}/>
     <Route path="/login" exact element={<LoginPage></LoginPage>}/>
     <Route path="/homepage" exact element={<Homepage user={currentUser} username={username} setusername={setUsername}></Homepage>}/>
    </Routes>
    </div>
  );
}

export default App;
