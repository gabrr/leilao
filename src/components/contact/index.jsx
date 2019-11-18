import React, { Component } from 'react'
import "./style.css"

export default class Contact extends Component {
    render() {
        return (
            <div id="Contact" className="blur">
                <div className="contact-grid">
                    <div className="txt-head">
                        Fale Conosco
                    </div>
                    <div className="cont-left">
                        <div className="cont-info">
                            <p><strong>Telefone: </strong> (11) 4545-4545</p>
                            <p><strong>E-mail: </strong> example@example.com</p>
                        </div>
                        <form action="post">
                            <label htmlFor="cont-mail">Seu e-mail</label>
                            <input type="email" className="round el-cl" id="cont-mail" placeholder="e-mail@mail.com" />
                            <label htmlFor="cont-message">Envie uma menssagem</label>
                            <textarea id="cont-message" className="round el-cl" rows="10"></textarea>
                        </form>             
                    </div>
                    <div className="cont-right">
                        <div className="cont-info">
                            <p><strong>Endereço: </strong> Rua Exemplo, 23 CEP 1111-34 São Paulo - SP</p>
                        </div>
                    </div>
                    <div className="card-button">Enviar</div>
                </div>                
            </div>
        )
    }
}
