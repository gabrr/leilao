import { createStore } from "redux";
import ap from "../assets/apartamento-luxo.png"
import ferrari from "../assets/ferrarif12.png"
import harley from "../assets/teslamodels.png"
import house from "../assets/casapiscina.png"
import iphone from "../assets/iphonexs.png"
import macbook from "../assets/macbook.png"
import tv from "../assets/aoctv.png"
import bros from "../assets/bros.png"
import truck from "../assets/caminhao-usado.png"
import usedcar from "../assets/carro-usado.png"
import house2 from "../assets/casa.png"
import ferraruItaly from "../assets/ferraliitaly.png"
import galaxy from "../assets/galaxys10.png"
import pagani from "../assets/pagani.png"
import porsche from "../assets/porsche-eletric.png"
import tv65 from "../assets/tv65.png"
import motor from "../assets/moto.png"



const INITIAL_STATE = {
    published: [{
            id: "2019112214001",
            image: ap,
            title: "Apartamento nova 1000m2 com piscina olímpica",
            finishingDate: 4000,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            details: {
                category: "housing",
                condition: "new",
                rooms: 4,
                suits: 2,
            },
            currentBid: 1800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 5000,
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214002",
            image: ferrari,
            title: "Ferrari nova 1000m2 com piscina olímpica",
            finishindDate: 1000,
            startDate: "10/11/2019",
            characs: `Condição: Novo
            Kilometragem: 1000
            Flex: Sim
            Categoria: Carro`,
            currentBid: 2800000,
            lastBidTime: "14/11/2019 16:45",
            userBidded: "Tarcizo",
            minBid: 5000,
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214003",
            image: harley,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214004",
            image: house,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214005",
            image: iphone,
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
            Owner: "gabrr",
            highlighted: false

        },
        {
            id: "2019112214006",
            image: macbook,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214007",
            image: tv,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214008",
            image: bros,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "2019112214009",
            image: truck,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "20191122130010",
            image: usedcar,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "20191122130011",
            image: house2,
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
            Owner: "gabrr",
            highlighted: true
        },
        {
            id: "20191122130012",
            image: ferraruItaly,
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
            Owner: "gabrr",
            highlighted: true
        },
        {
            id: "20191122130013",
            image: galaxy,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "20191122130014",
            image: pagani,
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
            Owner: "gabrr",
            highlighted: true
        },
        {
            id: "20191122130015",
            image: porsche,
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
            Owner: "gabrr",
            highlighted: true
        },
        {
            id: "20191122130016",
            image: tv65,
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
            Owner: "gabrr",
            highlighted: false
        },
        {
            id: "20191122130017",
            image: motor,
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
            Owner: "gabrr",
            highlighted: false
        }
    ]
};


function funcReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return {...state, funcs: action.func }
        default:
            return state;
    }

}

const store = createStore(funcReducer);

export default store;