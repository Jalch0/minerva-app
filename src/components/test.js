import React, { Component } from 'react'
import annyang from 'annyang'
import "./test.css"

let IL1 = 0
let IL2 = 0
let IL3 = 0

export default class test extends Component {

    constructor (props) {
        super(props)
        this.state = {
            pregunta_actual: 0
        }
        this.SpeechRecognition1 = this.SpeechRecognition1.bind(this)
    }

    SpeechRecognition1(){
        if(annyang){
            annyang.setLanguage("es-ES")


            const updatePregunta = () => {
                this.setState(prev => {
                    return {
                        pregunta_actual: prev.pregunta_actual + 1
                    }
                })
            }

            const afirmacion = () => {
                console.log(this)
                let a = document.getElementsByClassName("pregunta")[this.state.pregunta_actual]
                a.setAttribute("class", "disappears");
                annyang.abort();
                IL1++
                console.log(IL1)
                let b = document.getElementById("btnexit");
                b.click();
                updatePregunta()
            }

            function negacion(){
                let a = document.getElementsByClassName("pregunta")[this.state.pregunta_actual]
                a.setAttribute("class", "disappears");
                annyang.abort();
                IL2++
                console.log(IL2)
                let b = document.getElementById("btnexit");
                b.click();
                updatePregunta()
            }

            function posible(){
                let a = document.getElementsByClassName("pregunta")[this.state.pregunta_actual]
                a.setAttribute("class", "disappears");
                annyang.abort();
                IL3++
                console.log(IL3)
                let b = document.getElementById("btnexit");
                b.click();
                updatePregunta()
            }

            var comandos = {
                "claro": afirmacion,
                "sii": afirmacion,
                "nooo": negacion,
                "por supuesto": afirmacion,
                "obvio": afirmacion,
                "efectivamente": afirmacion,
                "desde luego": afirmacion,
                "en efecto": afirmacion,
                "claro que no": negacion,
                "nunca": negacion,
                "tal vez": posible,
                "posiblemente": posible,
                "no estoy seguro": posible,
                "si pero no": posible,
            };


            annyang.addCommands(comandos);
            annyang.setLanguage("es-ES");
            annyang.start({ continuous: false });
        }
    
    }

    NextTest = () => {
        setTimeout(() => {
            this.props.refreshpage("/test1")
        }, 5000);
    }

    componentDidMount(){
      setTimeout(() => {
         this.SpeechRecognition1();
     }, 2000);
    }
    render() {
        return (
            <div className="main">
                <div className="pregunta uno">
                    <h1 className="IL1">¿Te gusta leer toda clase de cosas?</h1>
                </div>
                <div className="pregunta dos">
                    <h1 className="IL2">¿Tomar apuntes te ayuda a recordar y comprender?</h1>
                </div>
                <div className="pregunta tres">
                    <h1 className="IL3">¿Te gusta comunicarte con tus amigos a través de cartas, e.mails o mensajes?</h1>
                </div>
                <div className="pregunta cuatro">
                    <h1 className="IL4">¿Te resulta fácil explicar tus ideas a otros?</h1>
                </div>
                <div className="pregunta cinco">
                    <h1 className="IL5">¿Tienes buena memoria para los lugares, fechas, nombres y demás?</h1>
                </div>
                <div className="pregunta seis">
                    <h1 className="IL6">¿Te parecen los pasatiempos como los crucigramas y las sopas de letras divertidos?</h1>
                </div>
                <div className="pregunta siete">
                    <h1 className="IL7">¿Escribes por placer?</h1>
                </div>
                <div className="pregunta ocho">
                    <h1 className="IL8">¿Te gusta jugar con palabras como los anagramas, las palabras encadenadas y demás?</h1>
                </div>
                <div className="pregunta nueve">
                    <h1 className="IL9">¿Te interesan los idiomas?</h1>
                </div>
                <div className="pregunta diez">
                    <h1 className="IL10">¿Te gusta participar en los debates y en las exposiciones en público?</h1>
                </div>
                <div className="btnexplain">
                    <button id="btnNEXT" href=""onClick={this.NextQuest}></button>
                </div>
                <div className="btnexplain">
                    <button id="btnexit" href=""onClick={this.NextQuest}></button>
                </div>
            </div>
            
        )
    }
}
