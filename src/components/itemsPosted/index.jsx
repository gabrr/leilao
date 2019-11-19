import React, { Component } from 'react'
import ap from "../../assets/apartamento-luxo.png"
import ferrari from "../../assets/ferrarif12.png"
import harley from "../../assets/teslamodels.png"
import house from "../../assets/casapiscina.png"
import iphone from "../../assets/iphonexs.png"
import macbook from "../../assets/macbook.png"
import "./clickedCards.css"
import "./style.css"

export default class ItemsPosted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardBtClicked: false
        }

        this.cardClicked = this.cardClicked.bind(this)
        this.closingCard = this.closingCard.bind(this)
    }

    closingCard(x) {
        let card = x.target.offsetParent;

        if(this.state.cardBtClicked === true) {
            Object.assign(card.style,{
                width: "90%",
                top: "0",
                left: "0",
                zIndex: "1"
            });
            this.setState({
                cardBtClicked: false
            })
            x.target.style.display = "none"
            // once the close button is clicked, the code above will reassign the original properties
        }
        
    }

    cardClicked(x) {
        if(this.state.cardBtClicked === false) {
            let card = x.target.offsetParent;  
            let cardLeft = x.target.offsetParent.offsetLeft;
            let windWidth = window.innerWidth;
            let percentCard = cardLeft / windWidth * 100;
            let percentWin = windWidth * 0.10;
            let cardPos = "";

            if(percentCard) {
                cardPos = `-${cardLeft-percentWin}px`;
            } else {
                cardPos = `${cardLeft}px`;
            }
            Object.assign(card.style, {
                zIndex: "3",
                width: "80vw",
                top: "-100px",
                left: cardPos,
            });
            this.setState({
                cardBtClicked: true
            })
            x.target.offsetParent.lastChild.style.display = "block"
            // the code above is about to make the card to expand
        }
        
    }


    render() {
        return (
            <div id="itemsPosted" className="blur">
                <div className="txt-head">Quase encerrando</div>
                <div className="cards-grid">
                    <div  style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                        <img src={ap} className="round" alt="img of this"/>
                        <div className="card-head">Apartamento mobiliado no litoral paulista</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                        <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                    </div>
                    <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                        <img src={harley} className="round" alt="img of this"/>
                        <div className="card-head">Moto Harley Davidson 2018 importada</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                        <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                    </div>
                    <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                        <img src={ferrari} className="round" alt="img of this"/>
                        <div className="card-head">Ferrari F12 nova com motor v12 usada apenas por um 1 ano</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                        <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                    </div>
                    <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                        <img src={house} className="round" alt="img of this"/>
                        <div className="card-head">Mansão nova 1000m2 com piscina olímpica</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                        <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                    </div>
                    <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                        <img src={iphone} className="round" alt="img of this"/>
                        <div className="card-head">Mansão nova 1000m2 com piscina olímpica</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                        <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                    </div>




                    <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                        <img src={macbook} className="round" alt="img of this"/>
                        <div className="card-head">Mansão nova 1000m2 com piscina olímpica</div>
                        <div className="card-txt-body"><strong>Termina em:</strong> 40 min</div>
                        <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                        <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                    </div>






                </div>
                <br/>
                <br/>
                <div className="card-button">
                    Carregar mais
                </div>
            </div>
        )
    }
}
