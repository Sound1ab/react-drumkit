import React from 'react';

export default class EditField extends React.Component {
    render() {
        const props = this.props;
        return (
            <input type="text" defaultValue={props.task.task} onChange={props.editTask.bind(null, props.task.id)} />
        )
    }
}