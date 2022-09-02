import styled from 'styled-components';
import 'animate.css';

export const DashboardContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-items: center;
justify-content: center;
align-content: center;
flex-grow: 1;
font-family: 'text';
color: #020106;
& input[type="text"] {
	text-align: center;
	width: 150px;
	height: 36px;
	font-size: 18px;
	border-radius: 2px;
	border: 1px solid DarkSlateGray;
	font-family: 'text';
	color: #020106;
    font-weight: medium;
}
& h1 {
	font-family: 'heading'
        animation: zoomInUp .5s;
}
& input[type="file"] {
	display: none;
}
`;

export const SuccessMessage = styled.header`
background-color: rgba(32, 178, 170, 0.5);
color: DarkGreen;
text-align: center;
font-size: 14pt;
height: 200px;
width: 200px;
& p {
	font-family: 'heading3';
	font-size: 14pt;
}
`;

export const FailMessage = styled.header`
background-color: rgba(255, 69, 0, 0.5);
color: DarkRed;
text-align: center;
height: 200px;
width: 200px;
& p {
	font-family: 'heading3';
	font-size: 14pt;
}
`;

export const Uploader = styled.label`
display: inline-block;
font-family: 'text';
font-size: 14px;
color: #020106;
font-weight: medium;
animation: zoomInDown 1s;
margin-top: 4vh;
& img {
	height: 20px;
	width: 20px;
	background-color: transparent;
filter: invert(9%) sepia(44%) saturate(2701%) hue-rotate(235deg) brightness(87%) contrast(107%);


}
& button {
	height: 20px;
	width: 20px;
}
`;

