import React, { Component } from 'react';
import Home from './Home';
import Carrinho from './Carrinho';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/materialize.min.css';
import './css/style.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {lista: [{nome: 'Livro Um', 
                          quantidade: 0, preco: 10.00, total: 0}, 
                          {nome: 'Livro Dois', 
                          quantidade: 0, preco: 20.90, total: 0},
                          {nome:'Livro Três',
                          quantidade: 0, preco: 12.00, total: 0},
                          {nome:'Livro Quatro',
                          quantidade: 0, preco: 13.57, total: 0},
                          {nome:'Livro Cinco',
                          quantidade: 0, preco: 45.45, total: 0},
                          {nome:'Livro Seis',
                          quantidade: 0, preco: 18.00, total: 0}]};
  }

  render() {
    return (
		 <Router>
			<Switch>
				<Route exact path='/' render={(props) => (
				  <Home {...props} lista={this.state.lista} />
				)}/>

				<Route exact path='/carrinho' render={(props) => (
				  <Carrinho {...props} lista={this.state.lista} />
				)}/>
			</Switch>
		</Router>
    );
  }
}

export default App;
