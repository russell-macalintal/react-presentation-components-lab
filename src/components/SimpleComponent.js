// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        if(this.state.mood === 'happy') {
            this.setState({
                mood: "sad"
            })
        }
        this.setState({
            moode: "happy"
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}