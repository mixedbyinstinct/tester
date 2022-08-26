import styled from 'styled-components';
import 'animate.css';

export const LoginContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;
& label {
font-family: system-ui;
color: DarkSlateGray;
font-size: 13.5pt;
font-weight: bold;
}
& input {
background-color: Azure;
color: DarkSlateGray;
font-family: system-ui;
font-size: 14pt;
text-align: center;
width: 100px;
height: 35px;
}
flex-shrink: 1;
animation: backInUp 1s;
`;

export const LoginButton = styled.button`
height: 38px;
width: 70px;
background-color: Navy;
color: Azure;
font-family: system-ui;
font-size: 14pt;
&:hover {
animation: swing .5s;
background-color: DarkSlateGray;
}
`;
