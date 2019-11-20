import React, { Component } from 'react'
import "./style.css";
import userAvatar from "../../svg/user.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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

    bluringBg() {
        
    }

    componentDidMount(){
        this.navbarPointer()
        this.bluringBg()
        this.rmBlur()
    }

    // removing blur when click in links
    rmBlur() {
        let mobile = document.getElementsByClassName("mobile-links")[0].childNodes
        mobile.forEach(li => {
            li.addEventListener("click", () => {
                this.menuToggler()
            })
        })
    }

    menuToggler() {
        // create the bars animation
        let togBtn = document.querySelector(".menu-toggle").childNodes;
        togBtn.forEach(x => x.classList.toggle("activated"));

        // to make elements blured
        let elms = document.querySelectorAll(".blur");
        elms.forEach(el => {
            el.classList.toggle("active");
        })
        

        let mobileNavLink = document.querySelector(".mobile-nav-links");
        if(mobileNavLink.className === "mobile-nav-links") {
            setTimeout(() => {
                mobileNavLink.classList.add("display");
            }, 100)
        } else {
            mobileNavLink.classList.remove("display");
        }
        // to show the links upon the navigation
    }

    render() {
        return (
            <React.Fragment>
                <div id="bar" className="blur">
                    <div className="logo txt-head">gabrr Leilões</div>
                    <div className="search-area shadow">
                        <input className="search-input el-cl round" type="text">
                        </input>
                    </div>
                    <div className="login-area">
                        <div className="register txt-body link">Cadastrar</div>
                        <div className="login txt-body link">Entrar</div>
                        <div className="avatar">
                            <img src={userAvatar} alt={"user avatar"}/>
                        </div>
                    </div>
                </div>
                <nav id="navbar">
                    <ul className="navigation txt-body blur">
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/publish">Leiloar algo</Link></li>
                        <li><Link to="/about">Sobre nós</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <div className="page-indicator circle high-cl"></div>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={this.menuToggler}>
                    <div className="bar1 whit-cl"></div>
                    <div className="bar2 whit-cl"></div>
                </div>
                <div className="mobile-nav-links">
                    <div className="login-area">
                        <div className="register txt-body link">Cadastrar</div>
                        <div className="login txt-body link">Entrar</div>
                        <div className="avatar">
                            <img src={userAvatar} alt={"user avatar"}/>
                        </div>
                    </div>
                    <ul className="mobile-links">
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/publish">Leiloar algo</Link></li>
                        <li><Link to="/about">Sobre nós</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
