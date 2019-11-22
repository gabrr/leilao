import React, { Component } from 'react'
import store from "../../store"
import phone from "../../assets/phone.png"
import motor from "../../assets/motor.png"
import building from "../../assets/building.png"
import car from "../../assets/sedan.png"
import "./style.css";

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: false
        }

        this.filterCat = this.filterCat.bind(this)
    }

    filterCat(x) {
        let cat = x.target.id.split("-", 1)[0];
        store.dispatch({type: "FILTER_CAT", filter: cat})
        console.log(cat, "clicked")
    }

    render() {
        return (
            <div id="categories-holder" className="blur">
                <div className="categories-style">
                    <div className="txt-head">Busque por categorias</div>
                    <ul>
                        <li><img onClick={this.filterCat} id="housing-category" src={building} alt="anthing you want"/></li>
                        <li><img onClick={this.filterCat} id="eletronics-category" src={phone} alt="anthing you want"/></li>
                        <li><img onClick={this.filterCat} id="vehicles-category" src={car} alt="anthing you want"/></li>
                        <li><img onClick={this.filterCat} id="motorcicles-category" src={motor} alt="anthing you want"/></li>
                    </ul>
                </div>
            </div>
        )
    }
}
