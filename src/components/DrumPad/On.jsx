import React from 'react';

import { drumpad } from './DrumPad.css'

export default class On extends React.Component {
    render () {
        return (
            <div className={drumpad}>
                <p>A</p>
            </div>
        );
    }
}