import { createGlobalStyle } from 'styled-components';
import paragraph from './CronusRound.otf';

export const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'text';
	src: url(${paragraph}) format('opentype');
	font-style: normal;
}
body {
	background-color: HoneyDew;
	color: DarkSlateGray;
	& ul {
		font-family: 'text';
		margin: 0 1rem;
	}
	& h1 {
		font-family: 'text';
                font-size: 32pt;
		font-weight: bold;
	}
	& h2 {
		font-family: 'text';
		font-size: 25pt;
		font-weight: bold;
	}
	& p {
		font-family: 'text';
		font-size: 12pt;
	}
}
`;
