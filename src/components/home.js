import React from  'react';
import { Container, Jumbotron, Text } from '../styles/App.styled';

const Home = () => {
    return (
	    <Container>
        <Jumbotron>
	    <h1>Instinct</h1>
        </Jumbotron>
       <Text>
	    <p>Welcome to my website. Im a recording and mix engineer based in Atlanta orginally from Upstate NY [etc]</p>
    </Text>
	    </Container>
    );
}

export default Home;
