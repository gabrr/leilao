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
            // once the close button is clicked, the code above will reassign the original properties
            x.target.offsetParent.firstChild.classList.remove("grownImage")
            x.target.offsetParent.classList.remove("grown")
            x.target.offsetParent.children[1].classList.remove("grown-head")
            x.target.offsetParent.children[3].classList.remove("active")
            x.target.offsetParent.lastChild.classList.remove("active")
            x.target.offsetParent.lastChild.firstChild.classList.remove("active")
            x.target.style.display = "none"

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
                top: "-200px",
                left: cardPos,
            });
            this.setState({
                cardBtClicked: true
            })
            // the code above is about to make the card to expand
            
            x.target.offsetParent.children[3].classList.add("active")
            // the additional data that comes in the cards
            x.target.offsetParent.lastChild.lastChild.style.display = "block"
            // show the close button
            x.target.offsetParent.firstChild.classList.add("grownImage")
            // expand card image
            x.target.offsetParent.classList.add("grown")
            // expand the card itself
            x.target.offsetParent.children[1].classList.add("grown-head")
            // adding margin to the card header title
            x.target.offsetParent.lastChild.classList.add("active")
            // display the buttons as a grid
            x.target.offsetParent.lastChild.firstChild.classList.add("active")
            // the button to bid with proper margins
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
                        <div id="cardAdditionalData">
                            <div className="card-txt-body"><strong>Inicio:</strong>  10/11/2019</div>
                            <div className="characs-holder">
                                <div className="card-head">Características</div>
                                <div className="charac-info">
                                Condição: Novo
                                Kilometragem: 1000
                                Flex: Sim
                                Categoria: Carro
                                </div> 
                            </div>
                            <div className="bidding-in-card">
                                <div className="card-head">Lance atual:</div>
                                <div className="current-bidding-value">R$ 37.590,90</div>
                                <div className="last-bid-info">
                                    <div>14/11/2019 16:45</div>
                                    <div>Usuário: Tarcizo</div>
                                </div>
                                <div className="bidding-input-outer">
                                    <input className="round el2-cl" type="number" placeholder="Exemplo: 3000"/>
                                    <div id="addition-sign">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="users-bid">
                                    <div className="card-head">Seu lance:</div>
                                    <div className="txt-high">R$ 47.500,00</div>
                                </div>
                            </div>
                        </div>
                        <div className="cards-button">
                            <div className="card-button bid-button" onClick={this.cardClicked}>Dar lance</div>
                            <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                        </div>
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
