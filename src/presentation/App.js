import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Click me ',
        }
    }

    handleClick = () => {
        this.setState({ message: 'Clicked' })
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>
                    {message}
                </button>
            </div>
        )
    }
}
