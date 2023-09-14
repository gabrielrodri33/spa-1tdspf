import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {
  document.title = "EDITAR PRODUTO";

  const navigate = useNavigate()

  const { id } = useParams();

  const produtoRecuperado = ListaProdutos.filter(
    (produto) => produto.id == id
  )[0];

  const [produto, setProduto] = useState({
    id: produtoRecuperado.id,
    nome: produtoRecuperado.nome,
    desc: produtoRecuperado.desc,
    preco: produtoRecuperado.preco,
  });

  const handleChange = (e) =>{
    //Destructuring
    const {name,value} = e.target;

    //Utilizando o SPREAD para adicionar o conteúdo no state:
    setProduto({...produto,[name]:value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    let indice;
    // ListaProdutos.forEach((item, index)=>{
    //   if(item.id == produto.id){
    //     indice = index;
    //   }
    // });

    indice = ListaProdutos.findIndex9item(item.id == ListaProdutos.id);

    ListaProdutos.splice(indice,1,produto);
    alert("Seu produto foi alterado com Sucesso!");
    navigate("/produtos");

  }

  return (
    <>
      {/* <div>
        <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
      </div> */}
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <input type="hidden" name="id" value={produto.id} />
            </div>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                value={produto.nome} onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={produto.desc} onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                value={produto.preco} onChange={handleChange}
              />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* <div>
        <p>Nome : {produto.nome}</p>
        <p>Desc : {produto.desc}</p>
        <p>Preço : {produto.preco}</p>
      </div> */}

    </>
  );
}
