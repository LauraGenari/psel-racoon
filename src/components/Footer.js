import React, { Component} from 'react';

class Footer extends Component {
    render() {
        const content = <span>
            {<div style={{ display: "flex", justifyContent: "space-around" }}>
                <span style={{ transform: "scale(0.8)" }}>
                    <img alt="logo" src="/img/lorem.png" />
                    <img alt="logo" src="/img/bolinha.png" />
                </span>
                <span style={{ transform: "scale(0.8)" }}>
                    <img alt="logo" src="/img/lorem.png" />
                    <img alt="logo" src="/img/bolinha.png" />
                </span>
            </div>}
            <p style={{textAlign:"center", color:"#b3b3b3"}}>Copyright© Ingram Micro Brasil 2018</p>
        </span>
    

        if (this.props.device) {
            return (
                <div>
                    {content}
                </div>
                
            )
        } else {
            return (
                <div style={{width:"300px", marginLeft:"calc(50% - 300px)", textAlign:"center"}}>                    
                    {content}
                </div>
            )
        }
    }
}

export default Footer;