import React, { Component } from 'react';

class Table extends Component{

    render() { 
        const cell = <td  style={{ border: "solid 3px #cccccc", textAlign:"center", padding:"1.5em"}}>
            <p style={{color:"#f4562b", fontFamily:"Abold"}}>Lorem ipsum dolor</p>
            <p style={{ color: "#7f7f7f" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </td>
        if (this.props.device) {
            return (
                <div>
                    <p class="subtitulo-desktop">Lorem ipsum dolor</p>
                    <table style={{ borderCollapse: "collapse", margin: "5%" }} >
                        <tbody>

                            <tr>
                                {cell}
                            </tr>
                            <tr>
                                {cell}
                            </tr>
                            <tr>
                                {cell}
                            </tr>
                            <tr>
                                {cell}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        else{
            return (
                <div>
                    <p class="subtitulo-desktop">Lorem ipsum dolor</p>
                    <table style={{ borderCollapse: "collapse", margin: "0% 10%" }}>
                        <tbody>

                            <tr>
                                {cell}
                                {cell}
                                {cell}
                                {cell}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
    
}

export default Table