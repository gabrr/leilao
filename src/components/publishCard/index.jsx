import React, { Component } from 'react'
// import cloud from "../../assets/cloud.png"
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
                                    <label for="publ-title">Escolha um título</label>
                                    <input type="text" id="publ-title" className="search-input el2-cl round"></input>
                                    <label for="publ-finish-date">Data de finalização</label>
                                    <input type="date" id="publ-finish-date" className="search-input el2-cl round"></input>
                                    <label for="publ-finish-time">Hora de finalização</label>
                                    <input type="time" id="publ-finish-time" className="search-input el2-cl round"></input>
                                    <div className="publ-switch">
                                        <div className="txt-body">Condição</div>
                                    </div>
                                </form>
                            </div>
                            <div className="publish-right"></div>
                            <div className="card-button">teste</div>
                        </div>
                    </div>
            </div>
        )
    }
}
