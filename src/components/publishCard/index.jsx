import React, { Component } from 'react'
import phone from "../../assets/phone.png"
import motor from "../../assets/motor.png"
import building from "../../assets/building.png"
import car from "../../assets/sedan.png"
import "./style.css"

export default class PublishCard extends Component {
    render() {
        return (
            <div id="publishCard" className="blur">
                    <div className="card el-cl round shadow">
                        <div className="img-uploader el2-cl round">
                            <div className="txt-body link">Enviar imagens</div>
                        </div>
                        <div className="publish-grid">
                            <div className="publish-left">
                                <form>
                                    <label htmlFor="publ-title">Escolha um título</label>
                                    <input type="text" id="publ-title" placeholder="Exemplo: Gol azul 4 portas em otimas condicoes" className="search-input el2-cl round"></input>
                                    <label htmlFor="publ-finish-date">Data de finalização</label>
                                    <input type="date" id="publ-finish-date" className="search-input el2-cl round" />
                                    <label htmlFor="publ-finish-time">Hora de finalização</label>
                                    <input type="time" id="publ-finish-time" className="search-input el2-cl round"></input>
                                    {/* switch button */}
                                    <div className="publ-switch">
                                        <div className="txt-body">Condição</div>
                                        <div className="switch-bt el2-cl round">
                                           <div className="option1">Usado</div> 
                                           <div className="option2">Novo</div> 
                                           <div className="selector round over-elem-cl"></div> 
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="publish-right">
                                <div className="txt-body">Defina a categoria</div>
                                <div className="categories-style">
                                    <ul>
                                        <li><img src={building} alt="anthing you want"/></li>
                                        <li><img src={phone} alt="anthing you want"/></li>
                                        <li><img src={car} alt="anthing you want"/></li>
                                        <li><img src={motor} alt="anthing you want"/></li>
                                    </ul>
                                </div>
                                <div className="txt-body">Características</div>
                                <textarea id="publ-message" className="round el2-cl"></textarea>
                            </div>
                            <div className="card-button">Publicar</div>

                        </div>
                    </div>
            </div>
        )
    }
}
