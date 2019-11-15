import React, { Component } from 'react'
import "./style.css";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointerClicked: false
        }

        this.menuToggler = this.menuToggler.bind(this);
    }

    navbarPointer() {
        let elementsPos = document.getElementsByClassName("navigation")[0].childNodes;
        let pointer = document.querySelector(".page-indicator");
        let pos = elementsPos[0].offsetLeft;
        let width = elementsPos[0].offsetWidth
        let pPos = (width / 2.5) + pos;
        pointer.style.left = pPos + "px";
        
        elementsPos.forEach(li => {
            li.addEventListener("mouseenter", () => {
                pos = li.offsetLeft;
                width = li.offsetWidth;
                pPos = (width / 2.5) + pos;
                pointer.style.left = pPos + "px";
            });
            li.addEventListener("mouseleave", () => {
                pos = elementsPos[0].offsetLeft;
                width = elementsPos[0].offsetWidth
                pPos = (width / 2.5) + pos;
                pointer.style.left = pPos + "px";
            });
            
        })

    }

    componentDidMount(){
        this.navbarPointer()
    }

    menuToggler() {
        let togBtn = document.querySelector(".menu-toggle").childNodes;
        togBtn.forEach(x => x.classList.toggle("activated"));
    }

    render() {
        return (
            <React.Fragment>
                <div id="bar">
                    <div className="logo txt-head">gabrr Leilões</div>
                    <div className="search-area">
                        <input className="search-input el-cl round" type="text">
                        </input>
                    </div>
                    <div className="login-area">
                        <div className="register txt-body link">Cadastrar</div>
                        <div className="login txt-body link">Entrar</div>
                        <div className="avatar">
                            :)
                        </div>
                    </div>
                </div>
                <nav id="navbar">
                    <ul className="navigation txt-body">
                        <li>Início</li>
                        <li>Leiloar algo</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                        <div className="page-indicator circle high-cl"></div>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={this.menuToggler}>
                    <div className="bar1 whit-cl"></div>
                    <div className="bar2 whit-cl"></div>
                </div>
            </React.Fragment>
        )
    }
}
