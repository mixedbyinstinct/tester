import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';
import { RegisterContainer } from '../styles/Register.styled';
import axios from 'axios';
import { Jumbotron, Text } from '../styles/App.styled';

const Register = () => {
    const history = useNavigate();

    function handleRegister(e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            username: form[0].value,
            email: form[1].value,
            password: form[2].value
        }
        axios.post("/register", user, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then(({data}) => {
            history("/login");
        })
    }
    useEffect(() => {
        axios.get("/isUserAuth", {
            headers : {
                "x-access-token": localStorage.getItem("token")
            }
        }).then(({data}) => {
            return data.isLoggedIn ? history("/playlist") : null
        })
    }, [])

    return (
<>
        
<Jumbotron>

	    <h1>Sign Up</h1>
      
        </Jumbotron><br />
                <RegisterContainer>
          <Text>
	    <p>Sign up below for access to priority mixing services:</p>
        </Text>
        <form onSubmit={event => handleRegister(event)}>
        <label>Email:</label>
	    <br />
<input required type="email" />
	    <br />
               <label>Username:</label>
	    <br />
<input required type="username" />
	    <br />
               <label>Password:</label>
	    <br />
<input required type="password" />
	    <br />
               <input required type="submit" value="Register"/>
               </form>
</RegisterContainer>  
</>
);
}

export default Register;
