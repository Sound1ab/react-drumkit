import React from 'react';
import Task from './Task.jsx';
import EditDeleteButtons from './EditDeleteButtons.jsx'
import EditField from './EditField.jsx';

import styles from '../../app.css';

export default class Tasks extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                {props.tasks.map((task) => {
                    return (
                        <div className={styles.task} key={task.id}>
                            {task.edit ? <EditField task={task} editTask={props.editTask} /> : <Task task={task}/>}
                            <EditDeleteButtons task={task} deleteNote={props.deleteNote} toggleEdit={props.toggleEdit} />
                         </div>)
                })}
            </div>
        )
    }
}