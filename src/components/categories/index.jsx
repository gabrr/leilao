import React, { Component } from 'react';
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
    }

    render() {
        return (
            <div id="categories-holder">
                <div className="txt-head">Busque por categorias</div>
                <ul>
                    <li><img src={building} alt="anthing you want"/></li>
                    <li><img src={phone} alt="anthing you want"/></li>
                    <li><img src={car} alt="anthing you want"/></li>
                    <li><img src={motor} alt="anthing you want"/></li>
                </ul>
            </div>
        )
    }
}
