import React, { Component } from 'react'
import annyang from 'annyang'
import "./explain.css"

export default class explain extends Component {

    SpeechRecognition1(){
        if(annyang){
        annyang.setLanguage("es-ES")
            var comandos = {
                "claro": empezar,
                "sii": empezar,
                "no": empezar,
                "por supuesto": empezar,
                "obvio": empezar,
                "efectivamente": empezar,
                "desde luego": empezar,
                "en efecto": empezar
            };

        function empezar() {
            let a = document.querySelector("div.loadfour")
            a.setAttribute("class", "dissapear1");
            annyang.abort();
            let b = document.getElementById("btn233");
            b.click();
        }
            annyang.addCommands(comandos);
            annyang.setLanguage("es-ES");
            annyang.start({ continuous: false });
    }
}

    explain() {
        setTimeout(() => {
            let utterance = new SpeechSynthesisUtterance("Hola, mi nombre es Minerva")
            utterance.lang = "es-MX"
            window.speechSynthesis.speak(utterance);
        }, 500);
        setTimeout(() => {
            let utterance = new SpeechSynthesisUtterance("Soy un proyecto basado en la teoría de las inteligencias múltiples de Howard Gardner.")
            utterance.lang = "es-MX"
            window.speechSynthesis.speak(utterance);
        }, 600);
        setTimeout(() => {
            let utterance = new SpeechSynthesisUtterance("A continuación, te haré un test para determinar cuales son tus inteligencias")
            utterance.lang = "es-MX"
            window.speechSynthesis.speak(utterance);
        }, 700);
        setTimeout(() => {
            let utterance = new SpeechSynthesisUtterance("¿Estas Listo?")
            utterance.lang = "es-MX"
            window.speechSynthesis.speak(utterance);
            this.SpeechRecognition1();
        }, 850);
    }
    componentDidMount(){
        this.explain();
    }

    Start2323 = () => {
        setTimeout(() => {
            this.props.refreshpage("/test")
        }, 1500);
    }

    render() {
        return (
            <div>
                <div className="loadone">              
                    <h1 className="load1">Hola</h1>
                    <h1 className="load12">Mi nombre es minerva</h1>
                </div>
                <div className="loadtwo">
                    <h1 className="load21">Soy un proyecto</h1>
                    <h1 className="load22">basado en la teoría de las inteligencias múltiples de Howard Gardner.</h1>
                </div>
                <div className="loadthree">
                    <h1 className="load31">A continuación</h1>
                    <h1 className="load32">te haré un test</h1>
                    <h1 className="load33">para determinar cuales son tus inteligencias</h1>
                </div>
                <div className="loadfour">
                    <h1 className="load41">¿Estas listo?</h1>
                </div>
                <div className="btnexplain">
                <button id="btn233" href=""onClick={this.Start2323}>Hola</button>
                </div>
            </div>
        )
    }
}
