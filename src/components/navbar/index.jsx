import React, { Component } from 'react'
import "./style.css";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="bar">
                    <div className="logo txt-head">gabrr Leilões</div>
                    <div className="search-area">
                        <input className="search-input el-cl round" type="text">
                        </input>
                    </div>
                    <div className="login-area">
                        <div className="register txt-body link">Cadastrar</div>
                        <div className="login txt-body link">Entrar</div>
                        <div className="avatar">
                            :)
                        </div>
                    </div>
                </div>
                <nav id="navbar">
                    <ul>
                        <li>Início</li>
                        <li>Leiloar algo</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                    </ul>
                </nav>
                
            </React.Fragment>
        )
    }
}
