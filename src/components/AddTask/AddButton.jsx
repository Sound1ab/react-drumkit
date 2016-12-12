import React from 'react';

export default class AddButton extends React.Component {
    render() {
        const props = this.props;
        return (
            <button onClick={props.addTask} > + </button>
        )
    }
}