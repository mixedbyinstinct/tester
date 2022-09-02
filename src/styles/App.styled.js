import styled from 'styled-components';
import 'animate.css';
import React from 'react';

export const Jumbotron = styled.header`
background-color: #140B38;
color: #eeeced;
border: none;
border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;
height: 60px;
width: 99vw;
text-align: center;
padding: 3px;
margin-bottom: 40px;
position: fixed;
top: 0;
z-index: -6000;
`;

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;

align-items: center;
justify-content: center;

flex-shrink: 1;
padding: 10px;
& h1 {
	animation: backInUp .5s;
}
`;

export const Text = styled.div`
margin-top: 5vh;
& p {
position: relative;
}
& p::before {
content: "";
position: absolute;
top: 100%;
width: 100%;
left: 0;
height: 3px;
border-radius: 2px;
background: linear-gradient(111.3deg, #818083 9.6%, #e6e6e6 93.6%);
}
`;

export const TopBar = styled.div`
display: flex;
flex-flow: row nowrap;
flex-shrink: 1;
width: 100%;
justify-content: center;
align-items: center;
position: fixed;
top: 0px;
`;

const MenuButtonContainer = styled.div`
height: 40px;
width: 40px;
padding: 10px;
position: absolute;
right: 0;
top: 10px;
animation: fadeInUpBig .5s;
&:hover {
	animation: rubberBand .5s;
}

`;

const MenuButtonBar = styled.div`
width: 85%;
height: 5px;
margin-top: 4px;
margin-bottom: 4px;
background-color: #F0921E;
`;

export const MenuButton = (props) => {
	return (
		<MenuButtonContainer onClick={props.onClick}>
		<MenuButtonBar />
		<MenuButtonBar />
		<MenuButtonBar />
		</MenuButtonContainer>
	);
}

export const Button = styled.button`
background-color: DarkSeaGreen;
color: Azure;
font-family: 'text';
border-radius: 4px;
height: 38px;
width: 70px;
&:hover {
	background-color: DarkSlateGray;
	animation: swing .5s;
}
`;
;














