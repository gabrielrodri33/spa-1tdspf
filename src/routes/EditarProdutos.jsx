import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos';

export default function EditarProdutos() {

  document.title = "EDITAR PRODUTO";

  const navigate = useNavigate();

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]

  const [produto, setProduto] = useState({
    id: produtoRecuperado.id,
    nome: produtoRecuperado.nome,
    desc: produtoRecuperado.desc,
    preco: produtoRecuperado.preco,
  });

       
  return (
    <>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Produto Selecionado</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>

          <div>VALOR DO USESTATE : {produto.nome}</div>
          <div>VALOR DO USESTATE : {produto.desc}</div>
          <div>VALOR DO USESTATE : {produto.preco}</div>
        </div>
    </>
    
  )
}
  