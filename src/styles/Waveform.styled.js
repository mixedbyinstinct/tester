import styled from 'styled-components';
import 'animate.css';

export const WaveformContainer = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
align-content: space-evenly;
justify-items: space-evenly;
height: 40px;  width: 100%;
background: transparent;
animation: zoomInDown 1s;
`;

export const Wave = styled.div`
width: 100%; height: 50px;
`;

export const PlayButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
background-color: transparent;
color: DarkSlateGray;
font-family: system-ui;
font-size: 16px;
border-radius: 50%;
border: none;
outline: none;
overflow: hidden;
&:hover {
background-color: DarkSlateGray;
color: LightSeaGreen;
transition: .5s ease;
}
`;
