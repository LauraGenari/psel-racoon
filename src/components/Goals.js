import React, { Component } from 'react';
import Goal from './Goal';

class Goals extends Component{

    render() {
        if (this.props.device) {
            return (
                <div>
                    <Goal color="azul-medio" />
                    <Goal color="azul-marinho" />
                    <Goal color="verde" />
                    <Goal color="laranja" />
                    <Goal color="roxo-bonito" />
                    <Goal color="azul-claro" />
                </div>
            )
        } else {
            return (
                <div style={{margin:"0 10%"}}>
                    <div style={{display:"flex"}}>
                        <Goal color="azul-medio" />
                        <Goal color="azul-marinho" />
                    </div>
                    <div style={{display:"flex"}}>
                        <Goal color="verde" />
                        <Goal color="laranja" />
                    </div>
                    <div style={{display:"flex"}}>
                        <Goal color="roxo-bonito" />
                        <Goal color="azul-claro" />
                    </div>
                    <div style={{display:"flex"}}>
                        <Goal color="azul-escuro" />
                        <Goal color="azul-medio" />
                    </div>
                    <div style={{display:"flex"}}>
                        <Goal color="azul-esverdeado" />
                        <Goal color="roxo-feio" />
                    </div>       
                </div>
            )
        }
    }  
}

export default Goals