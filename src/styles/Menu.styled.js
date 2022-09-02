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
background-color: #342B58;
/*overflow: hidden;*/
scroll: sticky;
animation: fadeInDown .5s;
`;

export const NavButton = styled.button`
background-color: #F0921E;
color: #F2F0F1;
font-family: 'buttons';
font-size: 14px;
font-weight: bold;
text-align: center;
border: none;
border-radius: 2px;
/*height: 48px;*/
&:hover {
	background-color: Transparent;
	color: #F0921E;
	animation: swing .5s;
}
`;
