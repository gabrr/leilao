import { createStore } from "redux";
import ap from "../assets/apartamento-luxo.png"
// import ferrari from "../../assets/ferrarif12.png"
// import harley from "../../assets/teslamodels.png"
// import house from "../../assets/casapiscina.png"
// import iphone from "../../assets/iphonexs.png"
// import macbook from "../../assets/macbook.png"

const INITIAL_STATE = {
    published: [{
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishingDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
        {
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishindDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
        {
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishindDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
        {
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishindDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
        {
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishindDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
        {
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishindDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
        {
            image: ap,
            title: "Mansão nova 1000m2 com piscina olímpica",
            finishindDate: 40,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 3000,
            Owner: "gabrr"
        },
    ]
};


function themeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            console.log(true)
            return {...state, teste: action.data }
        default:
            return state;
    }

}

const store = createStore(themeReducer);

export default store;