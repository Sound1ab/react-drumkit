import Data from './KeySounds.jsx';
import EventListener from 'react-event-listener';
import Pad from './Pad.jsx';
import React from 'react';
import SoundClip from './SoundClip.jsx';
import Unsemantic from '../../Unsemantic.css';

export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: Data,
            volume: 100,
            count: [1]
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
    componentWillMount() {
        const baseCount = [0];
        setInterval(() => {
            if(this.state.count[0] === 4){
                this.setState({
                    count: baseCount
                })
            }
            this.setState({
                count: this.state.count.map((value) => {return value + 1;})
            })
            console.log(this.state.count);
        }, 10000)
    }
    render () {
        const { keys, volume } = this.state;
        return (
            <div>
                {keys.map((key) => {
                    return (
                        <div className={`${Unsemantic['grid-25']}`} key={key.key}>
                            <Pad keys={key} count={this.state.count} />
                            <SoundClip url={key.url} status={key.status} volume={volume} keys={key.key} onFinishedPlaying={this.onFinishedPlaying.bind(this)} />
                        </div>
                    )
                })}
                <EventListener target="window" onKeydown={this.handleKeydown} onKeyup={this.handleKeyup} />
            </div>
        );
    }

}