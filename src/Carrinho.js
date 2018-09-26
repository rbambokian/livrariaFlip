import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Carrinho extends Component {
  componentDidMount() {
    var nome = [];
    var quantidade = [];
    var preco = [];
    var total = [];
    // total[0] corresponde ao valor total do carrinho
    // total[1] corresponde a quantidade total de livros no carrinho
    var i = 0;
    var k;
    var tam = this.props.lista.length;

    this.props.lista.map(function(book) {
      nome[i] = book.nome;
      quantidade[i] = book.quantidade;
      preco[i] = book.preco;
      total[i] = book.total;
      i++;
    });

    // evento para remover o elemento da tabela (carrinho)
    $(".btn-remove").on("click", function(){
      var aux = $(this).parent().parent().find("span");
      var livro = aux[0].textContent;
      for(var j=0; j<tam; j++) {
        if (nome[j] === livro) {
          k = j;
          quantidade[k]--;
          total[0] = total[0] - preco[k];
          total[1] = total[1] - 1;
        }
      }
    });

    // atualizar o estado da lista ("quantidade") com setState 
    $(".btn-remove").on("click", function() {
      var listaAtual = this.props.lista;
      listaAtual[k].quantidade = quantidade[k];
      listaAtual[0].total = total[0];
      listaAtual[1].total = total[1];
      this.setState({lista: listaAtual});
    }.bind(this)); 
  }

	render() {
		return (
      <div id="layoutCarrinho"> 
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo center">Livraria Flip</Link>
              <ul id="nav-mobile" className="left">
                <li><Link to="/"><i className="material-icons icon-nav">arrow_back</i></Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container border-content">
          <div className="col">
              <div className="card-panel teal center">
                <span className="card-title margin-title">Carrinho</span>
                <table className="centered">
                  <thead>
                    <tr>
                      <th>Descrição</th>
                      <th>Quantidade</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      this.props.lista.map(function(vetor){
                        if (vetor.quantidade > 0) {
                          return (
                            <tr>
                              <td><span>{vetor.nome}</span></td>
                              <td>{vetor.quantidade}</td>
                              <td>R$ {(vetor.preco * vetor.quantidade).toFixed(2)}</td>
                              <td><i className="material-icons btn-remove">delete_forever</i></td>
                            </tr>
                          );
                        }
                      })
                    }
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="total-carrinho">
                      <td><strong>TOTAL</strong></td>
                      <td></td>
                      <td><strong>R$ {this.props.lista[0].total.toFixed(2)}</strong></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
		);
	}
}