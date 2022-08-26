import React, { useState } from 'react';
import { QuoteContainer, QuoteButton, MessageBox } from '../styles/QuoteBar.styled';
import share from './share.png';
import axios from 'axios';

const QuoteBar = () => {
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
    
    return (
        <QuoteContainer>
        <h1>Mixing Quote Calculator:</h1>
        <label>How Many Songs?</label>
        <br />
        <input type="text" onChange={setSongs} value={songNum} />
        <QuoteButton onClick={calculate}><img src={share} alt="share" /></QuoteButton>
	    {displayOut ?
		    <MessageBox>
		    <p>{out}</p>
		    </MessageBox> :
		    <div />
	    }
</QuoteContainer>
    );
}

export default QuoteBar;
