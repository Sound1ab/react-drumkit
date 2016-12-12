import React from 'react';
import Sound from 'react-sound';

export default class SoundClip extends React.Component {
    render () {
        const { url, status, volume, keys, onFinishedPlaying } = this.props;
        return (
            <Sound url={url} playStatus={Sound.status[status]} volume={volume} onFinishedPlaying={onFinishedPlaying.bind(null, keys)} />
        );
    }
}