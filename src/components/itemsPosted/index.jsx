import React, { Component } from 'react'
import "./clickedCards.css"
import "./style.css"
import store from "../../store"
import addFuncs from "../../actions"

export default class ItemsPosted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardBtClicked: false,
            inputValue: 0
        }

        this.cardClicked = this.cardClicked.bind(this)
        this.closingCard = this.closingCard.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.biddingFormat = this.biddingFormat.bind(this)
    }

    componentDidMount() {
        this.setState({
            published: store.getState().published
        })        
    }

    componentWillMount() {
        store.dispatch(addFuncs([this.cardClicked, this.closingCard]))
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
            x.target.offsetParent.children[4].style.display = "none"
            x.target.offsetParent.children[5].classList.remove("active")
            x.target.offsetParent.lastChild.classList.remove("active")
            x.target.offsetParent.lastChild.firstChild.classList.remove("active")
            x.target.style.display = "none"
        }
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    biddingFormat(lastB, newBid, minBidAllowed) {
        if(newBid >= minBidAllowed) {
            let sum = parseInt(newBid) + parseInt(lastB);
            return  `R$ ${sum.toLocaleString('pt-BR')}`
        } else if(!newBid) {
            return `R$ ${lastB.toLocaleString('pt-BR')}`
        } else {
            return `Lance mínimo R$ ${minBidAllowed.toLocaleString('pt-BR')}` 
        }
    }

    // handlingData(docId) {
    //     console.log(docId)

    //     // manage the data that will go to the cards
    // }


    cardClicked(x) {
        console.log(store.getState())
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

            if(window.innerWidth < 768) {
                Object.assign(card.style, {
                    zIndex: "3",
                    width: "80vw",
                    top: "10px",
                    left: cardPos,
                });
            } else {
                Object.assign(card.style, {
                    zIndex: "3",
                    width: "80vw",
                    top: "-200px",
                    left: cardPos,
                });
            }
            this.setState({
                cardBtClicked: true
            })
            // the code above is about to make the card to expand
            const xTarget = x.target

            if(x.target.offsetParent.children[5]) {
                setTimeout(() => {
                    xTarget.offsetParent.children[5].classList.add("active")
                    // the additional data that comes in the cards
                }, 300)
            }

            x.target.offsetParent.lastChild.lastChild.style.display = "block"
            // show the close button
            x.target.offsetParent.firstChild.classList.add("grownImage")
            // expand card image
            x.target.offsetParent.classList.add("grown")
            // expand the card itself
            x.target.offsetParent.children[1].classList.add("grown-head")
            // adding margin to the card header title
            x.target.offsetParent.children[4].style.display = "block"
            // showing the owner
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
                    {
                        store.getState().addingFuncs.published.map(card => {
                            return (
                                <div style={{zIndex: 1, width: "90%", top: "0", left: "0" }} className="card el-cl round shadow">
                                <img src={card.image} className="round" alt="img of this"/>
                                    <div className="card-head">{card.title}</div>
                                    <div className="card-txt-body"><strong>Termina em: </strong>{card.finishingDate}</div>
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
                                                    <input id="biddingInput" className="round el2-cl" type="number" onChange={this.handleChange}  maxLength={"11"} placeholder={`Mínimo: ${this.biddingFormat(card.minBid)}`}/>
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
                                            <div className="card-button bid-button" id={card.id} onClick={this.cardClicked}>Dar lance</div>
                                            <div id="close-card-button" className="link" onClick={this.closingCard}>Cancel</div>
                                        </div>
                                    </div>
                            )
                        })
                    }
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
