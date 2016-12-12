import React from 'react';
import styles from './app.css';
import DrumPad from './components/DrumPad/DrumPad.jsx';

import EventListener, {withOptions} from 'react-event-listener';

import Data from './KeySounds.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: Data
        }
    }
    handleKeydown = (e) => {
        this.setState({
            keys: this.state.keys.map((key) => {
                    if(key.key ===  e.key || key.key.toUpperCase() === e.key){
                        key.value = true;
                    }
                    return key;
            })
        })
    }
    handleKeyup = (e) => {
        this.setState({
            keys: this.state.keys.map((key) => {
                if(key.key ===  e.key || key.key.toUpperCase() === e.key){
                    key.value = false;
                }
                return key;
            })
        })
    }
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.toDo}>
                    <DrumPad keys={this.state.keys} />
                    <EventListener target="window" onKeydown={this.handleKeydown} onKeyup={this.handleKeyup} />
                </div>
            </div>
        );
    }
}