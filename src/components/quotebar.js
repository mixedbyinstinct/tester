import React, { useState } from 'react';
import { QuoteContainer, QuoteButton, MessageBox, Header, CloseButton, XButton } from '../styles/QuoteBar.styled';
import share from './share.png';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { Jumbotron } from '../styles/App.styled';

const QuoteBar = (props) => {
    const [songNum, setSongNum] = useState(null);
    const [out, setOut] = useState('');
    const [displayOut, setDisplayOut] = useState(false);

    function setSongs(e) {
        setSongNum(e.target.value);
    }

    function calculate() {
        axios.get("/quote", {
            headers: {
                "number-of-songs": songNum
            },
        }).then(({data}) => {
            setOut(data.message);
            setDisplayOut(true);
        });
    }

    function toggleDisplay() {
        setDisplayOut(!displayOut);
    }

    return (
        <>
        <QuoteContainer>
        <Header>
        <XButton onClick={props.close}>X</XButton>
        <h1>Mixing Quote Calculator:</h1>
        </Header>
        <label>How Many Songs?</label>
        <br />
        <input type="text" onChange={setSongs} value={songNum} />
        <QuoteButton onClick={calculate}><img src={share} alt="share" /></QuoteButton>
{displayOut ?
    <Card border="dark" className="text-center">
        <Card.Header as="h3">
        Quote:
</Card.Header>
<Card.Body>

        <Card.Text>{out}</Card.Text>
</Card.Body>
 <CloseButton onClick={toggleDisplay}>Heard You</CloseButton>
</Card> :
<div />
}
        </QuoteContainer>

</>
);
}

export default QuoteBar;