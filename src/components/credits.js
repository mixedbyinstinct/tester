import React from 'react';
import { Jumbotron } from '../styles/App.styled';
import { CreditContainer, ArtGrid, ArtRow, ArtBox, Overlay, CreditList
 } from '../styles/Credits.styled';
import one from './1.jpeg';
import two from './2.jpeg';
import three from './3.jpeg';
import four from './4.jpeg';
import five from './5.jpeg';
import six from './6.jpeg';

const Credits = () => {
    return (
        <>
        <Jumbotron>
        <h1>Credits</h1>
        </Jumbotron>
        <CreditContainer>
        <ArtGrid>
        <ArtRow>
        <ArtBox>
        <img src={one} alt="1" />
        <Overlay>
        <button>one</button>
        </Overlay>
        </ArtBox>
<ArtBox>
        <Overlay>
        <button>two</button>
</Overlay>
<img src={two} alt="2" />
            </ArtBox>
<ArtBox>
            <Overlay>
            <button>three</button>
</Overlay>
<img src={three} alt="3" />
            </ArtBox>
</ArtRow>

<ArtRow>
            <ArtBox>
            <Overlay>
            <button>four</button>
</Overlay>
<img src={four} alt="4" />
            </ArtBox>
<ArtBox>
            <Overlay>
            <button>five</button>
</Overlay>
<img src={five} alt="5" />
            </ArtBox>

<ArtBox>
            <Overlay>
            <button>six</button>
</Overlay>
<img src={six} alt="6" />
            </ArtBox>
</ArtRow>
</ArtGrid>
<CreditList>
    <caption>Credits Include</caption>
    <thead>
    <tr>
    <th>Artist</th>
    <th>Recorded/Mixed/Both</th>
     </tr>
</thead>
<tbody>
    <tr>
    <td>Tootie Raww</td>
    <td>Both</td>
   </tr>
   <tr>
        <td>Boosie</td>
         <td>Both</td>
</tr>
<tr>
        <td>Lil Keed</td>
         <td>Recorded</td>
</tr>
<tr>
        <td>Calboy</td>
         <td>Mixed</td>
</tr>
<tr>
        <td>Slimelife Shawty</td>
         <td>Recorded</td>
</tr>
</tbody>
</CreditList>
</CreditContainer>
</>
);
}

export default Credits;