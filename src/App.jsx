import React from 'react';
import Styles from './app.css';
import Unsemantic from './Unsemantic.css';
import DrumPad from './components/DrumPad/DrumPad.jsx';

export default class App extends React.Component {

    render () {
        return (
            <div>
                <div className={`${Unsemantic['grid-container']} ${Styles['container']}`}>
                    <DrumPad />
                </div>
            </div>
        );
    }
}