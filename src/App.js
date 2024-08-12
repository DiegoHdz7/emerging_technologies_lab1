
import Login from './Login'
import { useState, useRef, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
  useNavigate
} from "react-router-dom";

import Comments from './Comments';
import Thankyou from './ThankYou';
import { Button } from 'bootstrap';




function App() {

   //States
   const [email, setEmail] = useState('');
   const [isLogin, setIsLogin] = useState(false);
   const [comment, setComment] = useState('');
   const [users, setUsers]=useState([]);

  
   
   //Json props

   const appProps = {
    email:email,
    setEmail:setEmail,
    isLogin:isLogin,
    setIsLogin:setIsLogin,
    comment:comment,
    setComment:setComment,
    users:users,
    setUsers:setUsers
   }

   //useEffect
   useEffect(() => {
    document.title = 'Diego Hernandez Lab 1';
  }, []);

  


  return (
    <>
   
    
    <Router>
      <Routes>
        <Route path ='/' element= {<Login appProps={appProps}/>}/>
        <Route path ='/thankyou' element= {<Thankyou email={email} comment={comment} />}/>
        <Route path ='/test' element= {<Login appProps={appProps}/>}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
