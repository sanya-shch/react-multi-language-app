import React from 'react';
import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div className="App">

                <h1>Title</h1>

                <p>
                    Paragraph with <b>html</b> inside
                </p>

                <p>
                    Paragraph with <a href="//google.com" target="_blank">link</a>
                </p>

                <input type="text" placeholder="input"/>
            </div>
        );
    }

}
