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
font-family: system-ui;
color: DarkSlateGray;
& input[type="text"] {
	text-align: center;
	width: 150px;
	height: 36px;
	font-size: 18px;
	border-radius: 2px;
	border: 1px solid DarkSlateGray;
	font-family: system-ui;
	color: DarkSlateGray;
}
& h1 {
	font-family: 'text';
	font-weight: bold;
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
	font-family: system-ui;
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
	font-family: system-ui;
	font-size: 14pt;
}
`;

export const Uploader = styled.label`
display: inline-block;
font-family: system-ui;
font-size: 14px;
color: DarkSlateGray;
animation: zoomInDown 1s;
& img {
	height: 20px;
	width: 20px;
	background-color: transparent;
}
& button {
	height: 20px;
	width: 20px;
}
`;
