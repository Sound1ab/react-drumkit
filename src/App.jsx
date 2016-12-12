import React from 'react';
import styles from './app.css';
import AddTask from './components/AddTask/AddTask.jsx';
import Tasks from './components/Tasks/Tasks.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 0,
                    task: 'clean the house!',
                    edit: false
                },
                {
                    id: 1,
                    task: 'hand up clothes!',
                    edit: false
                }
            ],
            currentTask: ''
        }
    }
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.toDo}>
                <AddTask addTask={this.addTask.bind(this)} updateCurrentTask={this.updateCurrentTask.bind(this)} />
                <Tasks tasks={this.state.tasks} deleteNote={this.deleteNote.bind(this)} toggleEdit={this.toggleEdit.bind(this)} editTask={this.editTask.bind(this)} />
                </div>
            </div>
        );
    }
    deleteNote = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => {
                return task.id !== id;
            })
        })
    }
    addTask = () => {
        this.setState({
            tasks: this.state.tasks.concat(
                [{
                    id: Math.floor((Math.random() * 1000) + 1),
                    task: this.state.currentTask,
                    edit: false
                }]
            )
        })
    }
    updateCurrentTask = (e) => {
        this.setState({
            currentTask: e.target.value
        })
    }
    toggleEdit = (id) => {
        this.setState({
            tasks: this.state.tasks.map((task) => {

                if(task.id === id){
                    task.edit = !task.edit;
                } else task.edit = false;
                return task
            })
        })
    }
    editTask = (id, e) => {
        this.setState({
            tasks: this.state.tasks.map((task) => {
                if(task.id === id){
                    task.task = e.target.value;
                }
                return task;
            })
        })
    }
}