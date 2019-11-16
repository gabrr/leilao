import React, { Component } from 'react'
import insta from "../../assets/insta.png"
import face from "../../assets/face.png"
import whats from "../../assets/whats.png"
import "./style.css"

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="blur">
                    <ul>
                        <li><img src={insta} alt="anything"/></li>
                        <li><img src={face} alt="anything"/></li>
                        <li><img src={whats} alt="anything"/></li>
                    </ul>
                    <div className="txt-high" style={{fontSize: "11px"}}>All rights reserved &copy; gabrr Leilões 2019</div>
                </footer>
            </React.Fragment>
        )
    }
}
