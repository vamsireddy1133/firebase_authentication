import React , {useState} from 'react';
import { auth } from './firebase';
import { Button } from 'react-bootstrap';

const UserAuth =()=>{
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const {email,password}=data;
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const signin=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            user=>console.log(user)
            
            ).catch(
                err=>alert("enter invalid credentials")
            )
    }
    const signup=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(
            user=>{console.log(user)
            alert("signup successfull!")
            }
            ).catch(
                err=>console.log(err)
            )
        
    }
    return(
        <div>
            <center>
                <div className=''>
                    <h1 className='bg-secondary mb-4 text-white'>Authentication Form with Firebase</h1>
                <form autoComplete='off' className='mt-3' >
                    <input type="email"
                       name='email'
                       value={email}
                       placeholder='email' 
                       onChange={changeHandler}
                       className='p-2 m-1 rounded-pill w'
                       /><br/>
                    <input type="password" 
                     name="password" 
                      value={password}
                       placeholder='password'
                        onChange={changeHandler}
                        className='p-2 m-1 rounded-pill'
                         /><br/>
                    <div direction="horizontal" gap={2} className='mt-2'>
                    <Button onClick={signin} variant="primary">sign in</Button>&nbsp;
                    <Button 
                       variant="success"
                        onClick={signup}

                    >sign up</Button>
                    </div>
                </form>
                </div>
            </center>
        </div>
    )

}

export default UserAuth