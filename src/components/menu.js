import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuContainer, NavButton } from '../styles/Menu.styled';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Menu = () => {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();

        const logout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	}

	useEffect(() => {
		axios.get("/isUserAuth", {
			headers: {
				"x-access-token": localStorage.getItem("token")
			},
		}).then(({data}) => data.isLoggedIn ? setUsername(data.username) : null);
	})

	return (
		<Navbar>
                <Container>
        <Navbar.Collapse>
        <Navbar.Text>
		<Link to="/about">
		<NavButton>About</NavButton>
		</Link>
        </Navbar.Text>
        
        <Navbar.Text>
		<Link to="/">
		<NavButton>Home</NavButton>
		</Link>
        </Navbar.Text>

        <Navbar.Text>
        <Link to="/credits">
		<NavButton>Credits</NavButton>
        </Link>
        </Navbar.Text>
        
	    <Navbar.Text>
                <Link to="/register">
		<NavButton>Sign Up</NavButton>
		</Link>
        </Navbar.Text>

		{username ? 
        <Navbar.Text><NavButton onClick={logout}>Log Out</NavButton></Navbar.Text> :
        <Navbar.Text>
		<Link to="/login">
		<NavButton>Log In</NavButton>
		</Link>
        </Navbar.Text>}

		{username ?
              <Navbar.Text>
				<Link to="/dashboard">
		<NavButton>Dashboard</NavButton>
				</Link>
        </Navbar.Text>:
		<div />}

		{username === 'mixedbyinstinct@gmail.com' ?
            <Navbar.Text>
		<NavButton>Admin Dashboard</NavButton>
        </Navbar.Text> :
		<div />}

        </Navbar.Collapse>
		</Container>
		</Navbar>
	);
}

export default Menu;

