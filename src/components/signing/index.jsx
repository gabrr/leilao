import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./style.css"

export default class Signing extends Component {
    cancel() {
        ReactDOM.unmountComponentAtNode(document.getElementById("card-to-sign"))
    }

    render() {
        if(this.props.type.innerText === "Entrar") {
            return (
                <div className="signing-card el-cl card-head round">
                    <h1 onClick={this.cancel}>{this.props.type.innerText}</h1>
                    <input type="text" className="over-elem-cl round" placeholder="nome do usuário ou e-mail"></input>
                    <input type="password" className="over-elem-cl round" placeholder="Senha"></input>
                </div>
            )
        } else {
            return (
                <div className="signing-card el2-cl card-head round">
                    <h1 onClick={this.cancel}>{this.props.type.innerText}</h1>
                    
                </div>
            )
        }
    }
}
