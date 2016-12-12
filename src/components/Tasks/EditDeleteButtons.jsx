import React from 'react';

export default class EditDeleteButtons extends React.Component {
    render () {
        const props = this.props;
        return (
            <div>
                <button onClick={props.toggleEdit.bind(null, props.task.id)} > Edit! </button>
                <button onClick={props.deleteNote.bind(null, props.task.id)}> Delete! </button>
            </div>
        )
    }
}