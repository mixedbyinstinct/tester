import styled from 'styled-components';
import 'animate.css';

export const MenuContainer = styled.div`
display: flex;
flex-flow: row nowrap;
height: 57px;
width: 100%;
justify-content: flex-start;
align-items: flex-start;
flex-shrink: 4;
/*overflow: hidden;*/
scroll: sticky;
animation: fadeInDown .5s;
`;

export const NavButton = styled.button`
background-color: Transparent;
color: DarkSlateGray;
font-family: system-ui;
font-size: 14x;
text-align: center;
border: none;
/*height: 48px;*/
&:hover {
	background-color: DarkSlateGray;
	color: LightSeaGreen;
	animation: swing .5s;
}
`;
