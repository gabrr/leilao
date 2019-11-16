import React, { Component } from 'react'
import ap from "../../assets/apartamento-luxo.png"
import ferrari from "../../assets/ferrarif12.png"
import harley from "../../assets/harley.png"
import house from "../../assets/casapiscina.png"
import iphone from "../../assets/iphonexs.png"
import macbook from "../../assets/macbook.png"

import "./style.css"

export default class ItemsPosted extends Component {
    render() {
        return (
            <div id="itemsPosted" className="blur">
                <div className="txt-head">Quase encerrando</div>
                <div className="cards-grid">
                    <div className="card el-cl round shadow">
                        <img src={ap} className="round" alt="img of this"/>
                        <div className="card-head">Apartamento mobiliado no litoral paulista</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button">Dar lance</div>
                    </div>
                    <div className="card el-cl round shadow">
                        <img src={harley} className="round" alt="img of this"/>
                        <div className="card-head">Moto Harley Davidson 2018 importada</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button">Dar lance</div>
                    </div>
                    <div className="card el-cl round shadow">
                        <img src={ferrari} className="round" alt="img of this"/>
                        <div className="card-head">Ferrari F12 nova com motor v12 usada apenas por um 1 ano</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button">Dar lance</div>
                    </div>
                    <div className="card el-cl round shadow">
                        <img src={house} className="round" alt="img of this"/>
                        <div className="card-head">Mansão nova 1000m2 com piscina olímpica</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button">Dar lance</div>
                    </div>
                    <div className="card el-cl round shadow">
                        <img src={iphone} className="round" alt="img of this"/>
                        <div className="card-head">Mansão nova 1000m2 com piscina olímpica</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button">Dar lance</div>
                    </div>
                    <div className="card el-cl round shadow">
                        <img src={macbook} className="round" alt="img of this"/>
                        <div className="card-head">Mansão nova 1000m2 com piscina olímpica</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button">Dar lance</div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="card-button">
                    load more
                </div>
            </div>
        )
    }
}
