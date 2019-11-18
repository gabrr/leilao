import React, { Component } from 'react'
import peter from "../../assets/man.png"
import paulo from "../../assets/man2.png"
import aline from "../../assets/woman.png"
import bruna from "../../assets/woman2.png"

import "./style.css"

export default class About extends Component {
    render() {
        return (
            <div id="About" className="blur">
                <div className="presentation">
                    <div className="txt-head" style={{fontSize: "30px"}}>gabrr Leilões</div>
                    <p className="txt-body">
                        Gabrr Leilões, é uma empresa credenciada com 3 anos no mercado, e tranformou a forma de participar em leilões, fazendo com que o processo seja extremamente simples. Além disso nós cuidamos para que haja total segurança para os que publicam e os leiloeiros.
                    </p>
                </div>
                <div className="testemonials">
                    <div className="txt-head">Depoimentos</div>
                    <ul className="people">
                        <li>
                            <img className="circle" src={peter} alt="person1"/>
                            <div className="tes-name txt-head">Peter</div>
                            <div className="tes-occup">Estudante de direto</div>
                            <div className="tes-message">Superou minhas expectativas pela facilidade.</div>
                        </li>
                        <li>
                            <img className="circle" src={paulo} alt="person1"/>
                            <div className="tes-name txt-head">Paulo</div>
                            <div className="tes-occup">Arquiteto</div>
                            <div className="tes-message">Fiquei impressionado com a qualidade de todo o processo, desde a apresentação dos itens sendo leiloads como o fechamento.</div>
                        </li>
                        <li>
                            <img className="circle" src={aline} alt="person1"/>
                            <div className="tes-name txt-head">Aline</div>
                            <div className="tes-occup">Corretora </div>
                            <div className="tes-message">Pra mim que sou corretora é muito difícil fazer coisas demoradas e burocráticas mas a gabrr é muito eficiente, obrigada :)</div>
                        </li>
                        <li>
                            <img className="circle" src={bruna} alt="person1"/>
                            <div className="tes-name txt-head">Bruna</div>
                            <div className="tes-occup">Programadora</div>
                            <div className="tes-message">Eu amo a facilidade de navegação e o paraíso visual que a gabrr proporciona comparando com outros sites de leilões.</div>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
