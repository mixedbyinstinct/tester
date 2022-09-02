import styled from 'styled-components';
import 'animate.css';
import { Jumbotron } from './App.styled';

export const QuoteContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
position: absolute;
left: 0;
height: 100%;
width: 200px;
background-color: rgba(103, 103, 106, 0.8);
flex-grow: 6;
overflow: hidden;
animation: slideInLeft 1s;
& label {
margin-top: 15vh;
color: #020106;
font-family: 'text';
font-size: 14px;
font-weight: medium;
}
& h1 {
font-family: 'heading';
font-size: 24px;
color: #020106;
}
& h3 {
margin-top: 3vh;
color: #020106;
font-size: 24px;
}
& input[type="text"] {
margin-top: 2vh;
width: 85%;
height: 36px;
font-family: 'text';
font-size: 18px;
font-weight: medium;
}
`;

export const XButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
font-family: 'buttons';
font-size: 18px;
background: transparent;
border: 1px solid #CCCCCD;
border-radius: 4px;
color: #cccccd;
position: absolute;
height: 30px;
width: 30px;
top: 0;
right: 0;
padding: 2px;

`;

export const CloseButton = styled.button`
font-size: 16px;
font-family: 'buttons';
text-align: center;
background-color: #020106;
color: #cccccd;
border: none;
border-radius: 4px;
padding: 6px
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
margin-top: 5vh;
& img {
	width: 32px;
	height: 32px;
filter: invert(9%) sepia(44%) saturate(2701%) hue-rotate(235deg) brightness(87%) contrast(107%);


}
&:hover {
	animation: rubberBand .5s;
}
`;

export const Header = styled(Jumbotron)`
z-index: 0;
width: 200px;
height: 15vh;
background-color: #2c234c;
margin-bottom: 10vh;
& h1 {
    font-size: 18px;
    color: #f2f0f1;
}
animation: slideInLeft 1s;
`;


export const MessageBox = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 95%;
height: 200px;
background-color: Gray;
border: 1px inset Gray;
border-radius: 4px;
& p {
	color: #0D0D0D;
	font-family: 'text';
	font-size: 16px;
    font-weight: medium;
}
`;;;;