import styled from 'styled-components';
import 'animate.css';

export const AboutContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
align-items: center;
justify-items: center;
flex-shrink: 1;
padding: 10px;
animation: fadeInDown .5s;
overflow: scroll;
& h2 {
	animation: backInUp .5s;
}
& img {
	height: 225px;
	width: 400px;
	border-radius: 3px;
	animation: zoomInDown 1s;
}
`;
