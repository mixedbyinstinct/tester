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
font-family: 'text';
color: #020106;
font-size: 13.5pt;
font-weight: bold;
}
& input {
background-color: #F2F0F1;
color: #020106;
font-family: 'text';
font-size: 14px;
font-weight: medium;
text-align: center;
width: 100px;
height: 35px;
margin-top: 3px;
margin-bottom: 3px;
}
& input[type="submit"] {
font-family: 'buttons';
font-size: 16px;
border-radius: 8px;
border: none;
background-color: #F0921E;
color: #F2F0F1;
}
& p {
margin-top: 8px;
}

flex-shrink: 1;
animation: backInUp .3s;
padding: 10px;
`;

export const LoginButton = styled.button`
height: 38px;
width: 70px;
background-color: Navy;
color: Azure;
font-family: 'text';
font-size: 14pt;
font-weight: bold;
&:hover {
animation: swing .5s;
background-color: DarkSlateGray;
}
`;
