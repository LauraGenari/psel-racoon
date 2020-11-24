import React, { Component } from 'react'

class Photo extends Component{
    render() {
        if (this.props.device) {
            return (
                <div>
                    <img alt="high five" src="/img/high5.png" style={{ width: "100%"}} />
                    <p class="txt mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
            )
        }
        else {
            return (
                <div style={{marginTop:"5em"}}>
                    <div class="thumb">
                        <img alt="high five" src="/img/high5.png" width="100%" />
                    </div>
                    <div class="txt desktop"> <p style={{padding:"5% 10%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>                
                    
                </div>
            )
        }
    }
}

export default Photo