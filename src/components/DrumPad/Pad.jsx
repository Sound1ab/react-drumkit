import React from 'react';

import Drumpad from './DrumPad.css';

export default class Pad extends React.Component {
    render () {
        const { keys, count } = this.props;
        const cssColors = [Drumpad.lightblue, Drumpad.lightcoral, Drumpad.lightcyan, Drumpad.lightgreen];
        let componentClasses = [Drumpad.drumpad];
        if (keys.value) {
            componentClasses.push(Drumpad.active);
        }
        for(let i = 0; i < count; i++){
            componentClasses.push(cssColors[i]);
        }
        return (
            <div className={`${componentClasses.join(' ')}`}>
                <p>B</p>
            </div>
        );
    }
}