import React ,{useEffect,useState} from 'react';
import UserAuth from './UserAuth';
import { auth } from './firebase';
import Home from './Home';


function App() {
  const [presentUser,setPresentUser]=useState({});
  useEffect(()=>{
     auth.onAuthStateChanged(
      user=>{
        if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }else{
      setPresentUser(null);
    }
      }
     )
  },[])
  return (
    <div>
     {presentUser ? <Home presentUser={presentUser.email}/> :<UserAuth /> }
    </div>
  );
}

export default App;
