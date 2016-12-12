import React from 'react';

import { drumpad, active } from './DrumPad.css';

export default class Off extends React.Component {
    render () {
        const { keys } = this.props;
        let componentClasses = [drumpad];
        if (keys.value) {
            componentClasses.push(active);
        }
        return (
            <div className={componentClasses.join(' ')}>
                <p>B</p>
            </div>
        );
    }
}