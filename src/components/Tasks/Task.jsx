import React from 'react';

export default class Task extends React.Component {
    render () {
        const props = this.props;
        return (
            <div>
                <p>{props.task.task}</p>
            </div>
        )
    }
}