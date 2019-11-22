import React, { Component } from 'react'
import store from '../../store'
import "./style.css";

export default class Highlighted extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlighted: [{}],
            inputValue: 0
        }

        this.cardClicked = this.cardClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.biddingFormat = this.biddingFormat.bind(this)
    }

    cardClicked(x) {
        store.getState().funcs[0](x)
        //, func from intemsPosted
    }

    closingCard(x) {
        store.getState().funcs[1](x)
        // when close cards, func from intemsPosted
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
        // this is for saving data to the input
    }
    biddingFormat(lastB = 0, newBid, minBidAllowed) {
        if(newBid >= minBidAllowed) {
            let sum = parseInt(newBid) + parseInt(lastB);
            return  `R$ ${sum.toLocaleString('pt-BR')}`
        } else if(!newBid) {
            return `R$ ${lastB.toLocaleString('pt-BR')}`
        } else {
            return `Lance mínimo R$ ${minBidAllowed.toLocaleString('pt-BR')}` 
        }
        // with one parameter formats data, if more than one parameter it sums the two, 
        // if third parameter is true, it will return the sum only if the second num is higher.
    }


    componentDidMount() {
        const products = store.getState().published.filter(x => x.highlighted)
        this.setState({
            highlighted: products
        })
    }

    render() {
        return (
            <div id="highlighted">
            <div id="cards-holder" className="blur">
                <div className="txt-head">Em destaque</div>
                <div className="cards-grid">
                    {this.state.highlighted.map(card => {
                        return(
                            <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                            <img src={card.image} className="round" alt="img of this"/>
                            <div className="card-head">{card.title}</div>
                            <div className="card-txt-body"><strong>Termina em:  </strong>{card.finishingDate}</div>
                            <div className="card-txt-body"><strong>Inicio: </strong>{card.startDate}</div>
                            <div className="card-txt-body" style={{display: "none"}}><strong>Proprietário: </strong>{card.Owner}</div>
                                <div id="cardAdditionalData">
                                    <div className="characs-holder">
                                        <div className="card-head">Características</div>
                                        <div className="charac-info">
                                        {card.characs}
                                        </div> 
                                    </div>
                                    <div className="bidding-in-card">
                                        <div className="card-head">Último lance:</div>
                                        <div className="current-bidding-value">{this.biddingFormat(card.currentBid)}</div>
                                        <div className="last-bid-info">
                                            <div>{card.lastBidTime}</div>
                                            <div>Usuário: {card.userBidded}</div>
                                        </div>
                                        <div className="bidding-input-outer">
                                            <input id="biddingInput" className="round el2-cl" type="number" onChange={this.handleChange} placeholder={`Mínimo: ${this.biddingFormat(card.minBid)}`}/>
                                            <div id="addition-sign">
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="users-bid">
                                            <div className="card-head">Seu lance:</div>
                                            <div className="txt-high">{this.biddingFormat(card.currentBid, this.state.inputValue, card.minBid)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards-button">
                                    <div className="card-button bid-button"  id={card.id} onClick={this.cardClicked}>Dar lance</div>
                                    <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        )
    }
}
