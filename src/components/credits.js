    import React, { useState, useEffect } from 'react';
import { Jumbotron } from '../styles/App.styled';
import { CreditContainer, ArtGrid, ArtRow, ArtBox, Overlay, CreditList
 } from '../styles/Credits.styled';
import one from './1.jpeg';
import two from './2.jpeg';
import three from './3.jpeg';
import four from './4.jpeg';
import five from './5.jpeg';
import six from './6.jpeg';

import axios from 'axios';

const Credits = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get("/table").then(({data}) => setTableData(data)); 
    })
    function renderTableData() {
            return tableData.map((credit, index) => {
                const { _id, name, activity } = credit;
                return (
                    <tr key={_id}>
                    <td>{name}</td>
                    <td>{activity}</td>
                   </tr>
                );
            })
    }
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
        {renderTableData()}
</tbody>
</CreditList>
</CreditContainer>
</>
);
}

export default Credits;