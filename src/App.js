import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

//Importando los componentes
import Particles from './components/particles'
import Title from './components/start'
import Explain from "./components/explain"
import "./App.css"
import Test from "./components/test"

export default class App extends Component{

  state = {
    IL1 : 0,
    IL2 : 0,
    IL3 : 0
  }

  totalpoints = (one, two, three) => {
    let IL1 = one;
    let IL2 = two;
    let IL3 = three;
    this.setState({IL1: IL1, IL2: IL2, IL3: IL3})
  }


  state =  {
    pathname: "/"
  }
  refreshpage = (location) => {
    let newpage = location
    this.setState({pathname: newpage})
    let zelda = document.getElementById("link")
    zelda.click();
  }

render(){
  return (
    <div>
      <Router>
        <Link id="link" to={this.state}></Link>
        <div className="start">
          <Particles/>
          <Route exact path="/inicio" render={() => {
          return <div className="titulo">
          <Title refreshpage={this.refreshpage} addTask={this.event}/>
          </div>
          }}>
          </Route>
        </div>
          <Route exact path="/explain" render={() => {                    
            return <div className="explain">
              <Explain refreshpage={this.refreshpage}/>
            </div>
            }}>
          </Route>
          <Route exact path="/test" render={() => {
            return <div className="test">
              <Test totalpoints={this.totalpoints} refreshpage={this.refreshpage}/>
            </div>
          }}>
          </Route>
        </Router>
      </div>
      );
  };

}