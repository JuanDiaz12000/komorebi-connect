import './Style/login.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KomorebiLogo from '../../GlobalComponents/assets/Komorebi.svg';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //const[post, setPost] = React.useState(null)
    const miPostsListURL = "http://localhost:8080/signin"

    function crearPost(username, password) {
        //console.log(username +  "-----" + password)
        axios.post(miPostsListURL, {
            username: username,
            password: password,
        }).then((response) => {routeChange()})
        .catch(e => {
            console.log(e)
        })
    }

    let navigate = useNavigate(); 
    const routeChange = () => { 
        navigate('/aws-connect');
    }

    return(
        <div className='loginScreen'>
            <img 
                className='loginScreen-logo'
                alt='img'
                src='https://wallpapercave.com/wp/wp8063327.jpg' 
                />

            <div className='logInPanel'>
                <div className='Komorebi'>
                    <img src={KomorebiLogo} alt='img' />
                    <h1>Komorebi Connect</h1>
                </div>

                <div className='credentials'>
                    <TextField
                    type="email"
                    label="Username or Email Address"
                    className='credentials-textfield'
                    value={username}
                    onChange={(event) => {setUsername(event.target.value)}}
                    />

                    <TextField
                    label="Password"
                    type="password"
                    className='credentials-textfield'
                    value={password}
                    onChange={(event) => {setPassword(event.target.value)}}
                    />
                    
                    <Button
                    onClick = {routeChange}/* {() => crearPost(username, password)} */
                    className="credentials-button"
                    >Log In</Button>
                </div>
            </div>
        </div>
    )
}

export default Login