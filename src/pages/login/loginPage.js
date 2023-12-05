import React from "react";
import './loginPage.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'


function LoginPage (){

    const navigate = useNavigate()

    const [userName , setUserName]= useState('');
    const [password , setPassword]= useState('');
    const [error,setError] = useState("");
    const [loginStatus , setLoginStatus] = useState('')

    const register = ()=>{
         navigate('/register')

    }

    const login =()=>{

      //navigate('/home')

      if(userName === "" || password===""){
        setError("Please enter valid data")
      }
      else{

        //TODO
        // API post call

        Axios.post(`url`, //here mention  the url
        {
          userName : userName,
          password: password
        }
        ).then((Response)=>{
          
          if(Response.data.message){
            setError(Response.data.message)
    
          }
          else{
            setLoginStatus(Response)
            console.log(Response.data[0].user_name)
            navigate('/home');
          }
        })
      }
      }

    return (
        <div>
            


                <div className="login-form">

                    <h1>Login</h1>
                    <input  type="text" placeholder='UserName' onChange={(e)=>{ setUserName(e.target.value) }}/>
                    <input type="password" placeholder='Password' onChange={(e)=>{ setPassword(e.target.value)}}/>
                    {(error !== "") ? <div className="error">{error}</div> : ""}
                    <button className="login-button button" onClick={login}>login</button>

                    <span class="horizontal-line"></span>
                    <span className="text">New User?</span>
                    <button className="login-button button" onClick={register}>Register</button>
                    
                </div>

           
            

        </div>
    )
}

export default LoginPage;