import React, {Component} from 'react';

class InputSelect extends Component{
    constructor(props){
        super(props)
        this.state = {
            border: "none",
            color: "#333"
        }
        
    }

    setActive = () => {
        this.setState({
            border: "solid 2px #0072c6",
            color: " #0072c6"
        })
    }

    render() {
        return (
            <span  onClick={this.setActive}>
                <p style={{color: this.state.color}}>Lorem ipsum</p>
                <input style={{border: this.state.border}} placeholder="Lorem ipsum" />
            </span>
        )
    }
}

export default InputSelect;