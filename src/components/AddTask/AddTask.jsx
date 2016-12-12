import React from 'react';
import Input from './Input.jsx';
import AddButton from './AddButton.jsx';
// import AddButton from './AddButton.jsx';

export default class AddTask extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <Input updateCurrentTask={props.updateCurrentTask} />
                <AddButton addTask={props.addTask} />
            </div>
        )
    }
}