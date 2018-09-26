import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Home extends Component {
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

    // evento para adicionar elemento na tabela e calcular valor final (carrinho)
    $(".add-table").on("click", function() {
      var aux = $(this).parent().parent().find("span");
      var livro = aux[0].textContent;
      for(var j=0; j<tam; j++) {
        if (nome[j] === livro) {
          k = j;
          quantidade[k]++;
          total[0] = total[0] + preco[k];
          total[1] = total[1] + 1;
        }
      }
    });

    // atualizar o estado da lista ("quantidade") e valor final com setState 
    $(".add-table").on("click", function() {
			var listaAtual = this.props.lista;
    	listaAtual[k].quantidade = quantidade[k];
    	listaAtual[0].total = total[0];
    	listaAtual[1].total = total[1];
      this.setState({lista: listaAtual});
    }.bind(this)); 
  }

	render() {
		return (
	    <div id="layoutHome"> 
	      <nav>
	        <div className="nav-wrapper">
	          <div className="container">
	            <Link to="/" className="brand-logo center">Livraria Flip</Link>
	            <ul id="nav-mobile" className="right">
	            	<li className="badge-count"><span className="new badge orange accent-2" data-badge-caption="livro(s)">{this.props.lista[1].total}</span></li>
	              <li className="li-icon"><Link to="/carrinho"><i className="material-icons icon-nav">shopping_cart</i></Link></li>
	            </ul>
	          </div>
	        </div>
	      </nav>

	      <div className="container border-content">
	        <div className="row">
	        	{
	        		this.props.lista.map(function(vetor){
	        			return (
	        				<div className="col s12 l4 m6">
	        					<div className="card blue-grey darken-1">
	        						<div className="card-content white-text">
	        							<span className="card-title" id="descricao">{vetor.nome}</span>
	        							<div className="img-text">
	                 				<img src="#" width="78" height="112.5" align="left" />
	                  			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	                			</div>
	                			<p className="valor-livro"><i className="material-icons">attach_money</i> <span className="preco">{vetor.preco.toFixed(2)}</span></p>
	        						</div>
				              <div className="card-action center">
					          		<a className="add-table" href="#">Adicionar ao carrinho</a>
				              </div>
	        					</div>
	        				</div>
	        			);
	        		})
	        	}
	        </div>
	      </div>
	    </div>
		);
	}
}