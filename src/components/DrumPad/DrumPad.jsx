import React from 'react';

import Off from './Off.jsx';
import SoundClip from './SoundClip.jsx';
import Data from './KeySounds.jsx';

import { parent } from './DrumPad.css';

import EventListener from 'react-event-listener';


export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: Data,
            volume: 100,
        }
    }
    handleKeydown = (e) => {
        this.playingStopped(null, 'STOPPED', e);
        setTimeout(() => {
            this.playingStopped('KEYDOWN', 'PLAYING', e);
        }, 1);
    }
    handleKeyup = (e) => {
        this.playingStopped('KEYUP', null, e);
    }
    playingStopped = (keyState, playingOrStopped, e) => {
        this.setState({
            keys: this.state.keys.map((key) => {
                if(key.key ===  e.key || key.key.toUpperCase() === e.key){
                    if(keyState === 'KEYDOWN'){key.value = true;}
                    if(keyState === 'KEYUP'){key.value = false;}
                    if(playingOrStopped){key.status = playingOrStopped;}
                }
                return key;
            }),
        })
    }
    onFinishedPlaying = (keys) => {
        let e = {key: keys};
        this.playingStopped(null, 'STOPPED', e);
    }
    render () {
        const { keys, volume } = this.state;
        return (
            <div className={parent}>
                {keys.map((key) => {
                    return (
                        <div key={key.key}>
                            <Off keys={key} />
                            <SoundClip url={key.url} status={key.status} volume={volume} keys={key.key} onFinishedPlaying={this.onFinishedPlaying.bind(this)} />
                        </div>
                    )
                })}
                <EventListener target="window" onKeydown={this.handleKeydown} onKeyup={this.handleKeyup} />
            </div>
        );
    }
}