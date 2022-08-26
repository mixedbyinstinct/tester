import React from 'react';
import { AboutContainer } from '../styles/About.styled';
import face from './pic.jpeg';

const About = () => {
	return (
		<AboutContainer>
		<h2>About Page</h2>
		<img src={face} alt="pic" />
		<p>Placeholder text</p>
		</AboutContainer>
	);
}

export default About;
