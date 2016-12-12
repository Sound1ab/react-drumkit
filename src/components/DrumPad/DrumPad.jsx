import React from 'react';

import Off from './Off.jsx';




export default class DrumPad extends React.Component {

    render () {
        const { keys } = this.props;
        return (
            <div>
                {keys.map((key) => {
                    return (
                        <div key={key.key}>
                            <Off keys={key} />
                        </div>
                    )
                })}
            </div>
        );
    }
}