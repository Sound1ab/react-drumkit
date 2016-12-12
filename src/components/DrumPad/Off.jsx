import React from 'react';
import Sound from 'react-sound';

import { drumpad, active } from './DrumPad.css';

export default class Off extends React.Component {
    render () {
        const { keys } = this.props;
        let componentClasses = [drumpad];
        if (keys.value) { componentClasses.push(active); }
        return (
            <div className={componentClasses.join(' ')}>
                <Sound url="/public/kit/7-kick.wav" playStatus={Sound.status.PLAYING} position={0} />
                <p>B</p>
            </div>
        );
    }
}