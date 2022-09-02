import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { LoginContainer, LoginButton } from '../styles/Login.styled';
import axios from 'axios';
import { Jumbotron, Container, Text } from '../styles/App.styled';

const Login = () => {
    const history = useNavigate();
    const [print, setPrint] = useState('');

    function handleLogin(e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        }
        axios.post("/login", user, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(({data}) => {
	    //alert(data.token);
            localStorage.setItem("token", data.token);
	    setPrint(data.message);
		history("/dashboard");
        })
    }
    useEffect(() => {
        axios.get("/isUserAuth", {
            headers : {
                "x-access-token": localStorage.getItem("token")
            }
        }).then(({data}) => {
            return data.isLoggedIn ? history("/dashboard") : null;
        })
    }, [])

    return (
        <>
        <Jumbotron>
	    <h1>Login</h1>
        </Jumbotron><br />
        <LoginContainer>
        
        <form onSubmit={event => handleLogin(event)}>
	    <p>{print}</p>
        <label>Email:</label>
	    <br />
<input required type="email" />
	    <br />
               <label>Password:</label>
	    <br />
<input required type="password" />
	    <br />
               <input required type="submit" value="Log In"/>
               </form>
</LoginContainer> 
</>
)
}

export default Login;
           