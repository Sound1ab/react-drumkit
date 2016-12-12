import React from 'react';
import styles from './app.css';
import DrumPad from './components/DrumPad/DrumPad.jsx';

export default class App extends React.Component {

    render () {
        return (
            <div className={styles.container}>
                <div className={styles.toDo}>
                    <DrumPad />
                </div>
            </div>
        );
    }
}