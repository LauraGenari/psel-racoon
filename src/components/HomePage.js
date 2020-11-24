import React, {Component} from 'react'

class HomePage extends Component{
    render(){
    if (this.props.device) {
        return (
            <div>
                <div class="homeImg mobile"></div>
                <span class="homeTxt mobile">
                    <span>
                        <p style={{ fontSize: "2.5em", fontFamily: "Abold", lineHeight:"0.5", paddingTop: "3vh"}}>Lorem ipsum</p>
                        <p style={{ fontSize: "1.5em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <button class="buttonHome mobile">Lorem ipsum</button>
                        <div><img src="/img/bolinha-lorem.png" alt="logo" width="150px"/></div>
                    </span>
                </span>
            </div>
        )
    }else {
        return (
            <div>
                <img class="homeImg" alt=""/>
                <span class="homeTxt desktop">
                    <span style={{width:"80%"}}>
                        <p style={{ lineHeight:"0.005", fontSize: "4em", fontFamily: "Abold", padding: "15% 0% 0% 10%" }}>Lorem ipsum</p>
                        <p style={{ fontSize: "2em", paddingLeft: "10%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <button class="buttonHome desktop">Lorem ipsum</button>
                        <div style={{ display: "flex", justifyContent: "space-between", margin: "4% 10% 4% 10%", width: "100%" }}>
                            <span><img src="/img/setinha.png" id="setinha" alt="setinha" /></span>
                            <span><img src="/img/bolinha-lorem.png" alt="logo" /></span>
                        </div>
                    </span>
                </span>
            </div>
        )
    }
        }

}

export default HomePage;