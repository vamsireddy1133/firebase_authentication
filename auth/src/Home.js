import React from 'react';
import { auth } from './firebase';
import { Button } from 'react-bootstrap';
const Home=({presentUser})=>{
    return(
        <div class="mt-4 p-5 bg-primary text-white rounded center">
            <center>
            <h1>Welcome to home component </h1>
            <h5> {presentUser}</h5>
            <Button onClick={()=>auth.signOut()} variant="danger">log out</Button>
            </center>
         </div>

       
    )
}
export default Home;