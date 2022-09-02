import styled from 'styled-components';
import 'animate.css';

export const CreditContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
animation: backInUp 1s;
padding: 10px;
margin-top: 10vh;
`;

export const CreditList = styled.table`
width: 90%;
border: none;
border-collapse: collapse;
padding: 6px;
margin-top: 10px;
& caption {
font-family: 'heading';
font-size: 18px;
margin-bottom: 10px;
color: #020106;
position: relative;
}
& caption::before {
content: "";
position: absolute;
top: 100%;
width: 100%;
left: 0;
height: 3px;
border-radius: 2px;
background: linear-gradient(111.3deg, #140b38 9.6%, #e6e6e6 93.6%);
}
& th {
font-family: 'heading3';
font-size: 16px;
height: 30px;
}
& td {
font-family: 'text';
font-size: 14px;
text-align: center;
}
& tr:nth-child(odd) {
animation: slideInLeft 1s;
color: #F2F0F1;
}
& tr:nth-child(even) {
animation: slideInRight 1.5s;
}
& tr:nth-child(even) td {
background-color: #2c234c;
color: #f2f0f1;
}
& tr:nth-child(odd) td {
background-color: #a7a5a6;
color: #04020b;
}
& tr:nth-child(odd) th {
background-color: #140B38;

}
& th:first-of-type {
border-top-left-radius: 4px;
}
& th:last-of-type {
border-top-right-radius: 4px;
}
`;

export const Overlay = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
align-items: center;
flex-shrink: 2;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
border-radius: 2px;
opacity: 0;
transition: .5s ease;
background-color: #140B38;
& button {
background-color: transparent;
border: none;
margin: 0.3px;
padding: 6px;
color: #EEECED;
font-family: 'overtext';
text-shadow: 0 0 5px silver;
font-size: 18px;
}
`;

export const ArtGrid = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-content: stretch;
align-items: stretch;
flex-grow: 1;
`;

export const ArtRow = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
align-content: stretch;
align-items: stretch;
flex-grow: 1;
padding: 2px;
& img {
border-radius: 2px;
height: 125px;
width: 125px;
}
`;

export const ArtBox = styled.div`
position: relative;
height: 125px;
width: 125px;
&:hover ${Overlay} {
opacity: 0.92;
}

`;;;