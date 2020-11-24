import React, {Component} from "react";

class Text extends Component {
    render() {
        if (this.props.device) {
            return (
                <div class="lorem mobile">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <p class="subtitulo-mobile">Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            );
        } else {
            return (
                <div class="lorem desktop">
                    <p><b style={{color:"#f4562b"}}>Lorem ipsum</b> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <p class="subtitulo-desktop">Lorem Ipsum</p>
                    <p style={{lineHeight:"0.5"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            );
        }
    }
}

export default Text;