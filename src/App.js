/*import React from "react";

function oi(){
  return(<h1>Olá, mundo</h1>)
}

export default oi;

import React from "react";*/

import React, {Component} from "react";

import banana from "./img/bananas.jpg";


class App extends Component{
  state ={
    nome:"Daniel Carvalho",
    idade : 29,
    comida: "Pizza",
    musicas:["Foi um rio que passou em minha vida ", "Patota de Cosme", "Morra bem, viva rápido"],
    
    
}

  render(){
    return(
      <div>
        <h1> {this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[2]}</li>
          <li>{this.state.musicas[1]}</li>
        </ol>
        <img src={banana}/>
      </div>
    )
  }
}
export default App 
