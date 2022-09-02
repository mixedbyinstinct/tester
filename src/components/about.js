import React from 'react';
import { AboutContainer } from '../styles/About.styled';
import face from './pic.jpeg';
import { Jumbotron, Text } from '../styles/App.styled';

const About = () => {
    return (
        <>
        <Jumbotron>
        <h2>About Page</h2>
        </Jumbotron>
        <AboutContainer>
        <img src={face} alt="pic" />
        <Text>
        <p>Placeholder text</p>
</Text>
</AboutContainer>
</>
);
}

export default About;
