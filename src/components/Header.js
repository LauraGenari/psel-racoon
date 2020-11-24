import React, { Component } from 'react';

class Header extends Component{
    
    render(){        
        if(this.props.device){    
            return(
                <nav style={{justifyContent: "space-between"}}>
                    <img src="/img/menu-white.png" alt="options"></img>
                    <button type="button" class="buttonHeader mobile">Lorem ipsum</button>
                </nav>
            )
        }
        else{
            return(
                <nav style={{justifyContent: "space-around"}}>
                    <img src="/img/bolinha-lorem.png" alt="options" id="icon"/>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <button type="button" class="buttonHeader desktop">Lorem ipsum</button>
                </nav>
            )
        }
    }  
}

export default Header