import React from 'react';

export default class Input extends React.Component {
    render() {
        const props = this.props;
        return (
            <input type="text" defaultValue="hey man, what you need to do today?" onChange={props.updateCurrentTask} />
        )
    }
}