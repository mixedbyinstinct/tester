import styled from 'styled-components';
import 'animate.css';

export const QuoteContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
position: absolute;
left: 0;
height: 100%;
width: 200px;
background-color: rgba(143, 188, 143, 0.5);
flex-shrink: 6;
overflow: hidden;
animation: slideInLeft 1s;
& label {
color: DarkSlateGray;
font-family: system-ui;
font-size: 14px;
}
& h1 {
font-family: 'text';
font-size: 24px;
color: DarkSlateGray;
}
& input[type="text"] {
width: 85%;
height: 36px;
font-family: system-ui;
font-size: 18px;
}
`;

export const QuoteButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 32px;
height: 32px;
border-radius: 4px;
border: none;
outline: none;
background: transparent;
& img {
	width: 32px;
	height: 32px;
}
&:hover {
	animation: rubberBand .5s;
}
`;

export const MessageBox = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 95%;
height: 200px;
border: 1px inset black;
border-radius: 4px;
& p {
	color: DarkSlateGray;
	font-family: system-ui;
	font-size: 16px;
}
`;
