import React from 'react';
import { Gooey, Dots, Dot } from '../styles/Loader.styled';

const Loader = () => {
    return (
        <Gooey>
        <Dot />
        <Dots>
        <span></span>
        <span></span>
        <span></span>
        </Dots>
        </Gooey>
    );
}

export default Loader;