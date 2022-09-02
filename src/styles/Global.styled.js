import { createGlobalStyle } from 'styled-components';
import text from './Barlow-Regular.otf';
import heading from './SyneExtraBold.ttf';
import heading3 from './SyneSemiBold.ttf';
import buttons from './SyneRegular.ttf';
import overtext from './Barlow-Italic.otf';

export const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'text';
	src: url(${text}) format('opentype');
	font-style: normal;
}
@font-face {
	font-family: 'heading';
	src: url(${heading}) format('truetype');
	font-style: normal;
}
@font-face {
	font-family: 'heading3';
	src: url(${heading3}) format('truetype');
	font-style: normal;
}
@font-face {
	font-family: 'buttons';
	src: url(${buttons}) format('truetype');
	font-style: normal;
}
@font-face {
   font-family: 'overtext';
   src: url(${overtext}) format('opentype');
    font-style: normal;
}
body {
	background-color: #F2F0F1;
	& ul {
		font-family: 'text';
		margin: 0 1rem;
	}
	& h1 {
		font-family: 'heading';
                font-size: 32px;
	}
	& h2 {
		font-family: 'heading';
		font-size: 28px;
	}
    & h3 {
		font-family: 'heading3';
		font-size: 26px;
	}
	& p {
		font-family: 'text';
		font-size: 12pt;
        font-weight: medium;
        color: #020106;
	}
}
`;


