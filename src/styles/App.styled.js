import styled from 'styled-components';
import 'animate.css';
import React from 'react';

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
align-content: center;
align-items: center;
justify-content: center;
justify-items: center;
flex-grow: 1;
padding: 10px;
& h1 {
	animation: backInUp .5s;
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
background-color: HoneyDew;
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
background-color: Black;
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
