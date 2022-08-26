import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuContainer, NavButton } from '../styles/Menu.styled';
import axios from 'axios';

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
		<MenuContainer>
                <ul>
		<Link to="/about">
		<NavButton>About</NavButton>
		</Link>

		<Link to="/">
		<NavButton>Home</NavButton>
		</Link>

		<NavButton>Credits</NavButton>
	
                <Link to="/register">
		<NavButton>Sign Up</NavButton>
		</Link>

		{username ? <NavButton onClick={logout}>Log Out</NavButton> :
		<Link to="/login">
		<NavButton>Log In</NavButton>
		</Link>}

		{username ?
				<Link to="/dashboard">
		<NavButton>Dashboard</NavButton>
				</Link> :
		<div />}

		{username === 'mixedbyinstinct@gmail.com' ? 
		<NavButton>Admin Dashboard</NavButton> :
		<div />}

		</ul>
		</MenuContainer>
	);
}

export default Menu;
