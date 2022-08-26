import React from 'react';
import WaveSurfer from 'wavesurfer.js';
//import Play from './play.png';
//import Pause from './pause.png';

import { WaveformContainer, Wave, PlayButton } from '../styles/Waveform.styled';

class Waveform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
        }
    }
    componentDidMount() {
        const track = document.querySelector('#track');
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            backend: 'WebAudio',
            height: 50,
            progressColor: 'Cyan',
            waveColor: 'Black',
            cursorColor: 'Transparent',
        });
        this.wavesurfer.load(track);
    }
    handlePlay = () => {
        this.setState({playing: !this.state.playing});
        this.wavesurfer.playPause();
    }
    render() {
        return (
            <WaveformContainer>
            <PlayButton onClick={this.handlePlay}>
            {!this.state.playing ? 'Play' : 'Pause'}
            </PlayButton>
            <Wave id="waveform" />
                <audio id="track" src={this.props.src} />
                    </WaveformContainer>
        )
    }
}

export default Waveform;
