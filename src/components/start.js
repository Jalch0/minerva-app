import React, { Component } from 'react'

import "./start.css"

export default class start extends Component {

Start = () => {
    let b = document.getElementById("song1")
    console.log(b.volume);
    b.volume = 0.2;
    console.log(b.volume);
    b.play();
    let a = document.querySelector("div.Start1")
    a.setAttribute("class", "dissapear");
    setTimeout(() => {
    this.props.refreshpage("/explain");
    }, 1500);
}

    render() {
        return (
            <div className="Start1">
                <div className="titlestart">
                    <h1 id="title">M I N E R V A</h1>
                </div>
                <div className="btnstart">
                    <button onClick={this.Start}id="btn" type="button" className="btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Empezar
                        </button>
                </div>
                <div id="footer">Designed and built by Javier Labrador</div>
            </div>
        )
    }
}
