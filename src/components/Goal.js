import React, { Component } from 'react';

class Goal extends Component{
    render() {        
        return (
            <span style={{display:"flex", justifyContent:"center", margin:"20px"}}>
                <span id={this.props.color}>
                    <span class="goal" >
                        <span style={{paddingRight:"10px"}}><img src="/img/tei-tei.png" alt="goal"/></span>
                        <span>
                            <p style={{fontFamily:"Abold", fontSize:"1.2em"}}>Lorem ipsum</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </span>
                    </span>
                </span>
            </span>
        )
    }  
}

export default Goal