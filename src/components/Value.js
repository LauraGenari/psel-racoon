import React, { Component } from 'react';

class Value extends Component{
    render() {        
        const stroke = this.props.color + "-stroke"
        const txt = this.props.color + "-txt"
        const back = this.props.color + "-back"
        const imgSrc = "/img/" + this.props.color + ".png"
        if (this.props.size) {
            return (
                <div style={{ margin: "5%" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span>
                            <p class={txt} >Lorem ipsum dolor</p>
                            <p style={{ color: "#7f7f7f" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            <button class={stroke}>Lorem ipsum</button>
                        </span>
                        <span style={{ transform: "scale(0.7)" }}>
                            <span class="bolinha" id={back}>
                                <img src={imgSrc} alt=""/>
                            </span>
                        </span>
                    </span>
                    <div class="line mobile"></div>
                </div>
            )
        }
        else {
            return (
                <span style={{ margin: "5%"}}>
                    <div class="bolinha" id={back} style={{marginLeft:"calc(50% - 75px)"}}>
                        <img src={imgSrc} alt=""/>
                    </div>          
                    <div class="line desktop"></div>
                    <div style={{textAlign:"center"}}>
                        <p class={txt} >Lorem ipsum dolor</p>
                        <p style={{color: "#7f7f7f"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <button class={stroke}>Lorem ipsum</button>
                    </div>                    
                </span>
            )
        }
    }  
}

export default Value