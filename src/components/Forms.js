import React, { Component} from 'react';
import InputSelect from './InputSelect'

class Forms extends Component{

    render() {    
        const content =
            <span>
                <form style={{ marginTop: "7.5%" }}>
                    <InputSelect />
                    <InputSelect />
                    <InputSelect />
                    <InputSelect />
                    <InputSelect />
                </form>           
                <button>Lorem ipsum</button>

            </span>
        
        if (this.props.device) {
            return (
                <div style={{position:"relative", bottom: "calc(70vw * 47/90)"}}>
                    <p class="lorem mobile" style={{marginBottom:"15%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div class="forms mobile">
                        {content}
                    </div>
                </div>
            )
        }
        else {            
            return (
                <div style={{position:"relative", bottom:"270px"}}>
                    <p class="lorem desktop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div class="forms desktop">
                        {content}
                    </div>
                </div>
            )
        }
    }  
}

export default Forms