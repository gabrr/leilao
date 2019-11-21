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
                    <h1>{this.props.type.innerText}</h1>
                    <input type="text" className="el2-cl round" placeholder="nome do usuário ou e-mail"></input>
                    <input type="password" className="el2-cl round" placeholder="Senha"></input>
                    <div className="cards-button">
                        <div className="card-button bid-button">Entrar</div>
                        <div className="link"  onClick={this.cancel}>Cancel</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="signing-card el-cl card-head round">
                    <h1>{this.props.type.innerText}</h1>
                    <input type="email" className="el2-cl round" placeholder="Seu e-mail"></input>
                    <input type="text" className="el2-cl round" placeholder="Nome de usuário"></input>
                    <input type="password" className="el2-cl round" placeholder="Senha"></input>
                    <input type="password" className="el2-cl round" placeholder="Confirmar senha"></input>
                    <div className="cards-button">
                        <div className="card-button bid-button">Cadastrar</div>
                        <div className="link" onClick={this.cancel}>Cancel</div>
                    </div>
                </div>
            )
        }
    }
}
