import React, { Component } from 'react';
import Value from './Value';

class Values extends Component{

    render() { 
        const values = <span style={{display:"inherit"}}>
            <Value color="verde-values" size={this.props.device} />
            <Value color="azul-values" size={this.props.device}/>
            <Value color="amarelo-values" size={this.props.device} />
        </span>
        if (this.props.device) {
            return (
                <div>
                    <p class="subtitulo-mobile">Lorem ipsum</p>
                    {values}
                </div>
            )
        }
        else{
            return (
                <div>
                    <p class="subtitulo-desktop">Lorem ipsum</p>
                    <div style={{display:"flex"}}>
                        {values}
                    </div>
                </div>
            )
        }
    }
    
}

export default Values