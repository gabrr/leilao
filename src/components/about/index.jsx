import React, { Component } from 'react'
import peter from "../../assets/man.png"
import "./style.css"

export default class About extends Component {
    render() {
        return (
            <div id="About">
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
                            <img className="circle" src={peter} alt="person1"/>
                            <div className="tes-name txt-head">Peter</div>
                            <div className="tes-occup">Estudante de direto</div>
                            <div className="tes-message">Superou minhas expectativas pela facilidade.</div>
                        </li>
                        <li>
                            <img className="circle" src={peter} alt="person1"/>
                            <div className="tes-name txt-head">Peter</div>
                            <div className="tes-occup">Estudante de direto</div>
                            <div className="tes-message">Superou minhas expectativas pela facilidade.</div>
                        </li>
                        <li>
                            <img className="circle" src={peter} alt="person1"/>
                            <div className="tes-name txt-head">Peter</div>
                            <div className="tes-occup">Estudante de direto</div>
                            <div className="tes-message">Superou minhas expectativas pela facilidade.</div>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
