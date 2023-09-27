import styles from "./Modal.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function ModalData(props) {
  document.title = "EDITAR PRODUTO";

  if (props.statusModal) {
    const navigate = useNavigate();
    const produtoRecuperado = ListaProdutos.filter(
      (produto) => produto.id == props.idProduto
    )[0];
    const [produto, setProduto] = useState({
      id: produtoRecuperado.id,
      nome: produtoRecuperado.nome,
      desc: produtoRecuperado.desc,
      preco: produtoRecuperado.preco,
    });

    const handleChange = (e) => {
      //Destructuring
      const { name, value } = e.target;
      //Populando o state produto com as propriedades dos inputs que estão sendo ativados, utilizando SPREAD.
      setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let indice;
      //Recuperando o índice do produto alterado com forEach.
      // ListaProdutos.forEach((item,index)=>{
      //   if(item === produto){
      //     indice = index;
      //   }
      // });

      //Ou utilizando o método indexOf
      indice = ListaProdutos.indexOf((item) => item.id == produto.id);

      //Alterando o produto na lista com o método splice()
      ListaProdutos.splice(indice, 1, produto);

      //Redirecionando o usuáio para a página de produtos!
      navigate("/produtos");
    };

    return (
      <div className={styles.modalBase}>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Produto Selecionado</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  value={produto.nome}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input
                  type="text"
                  name="desc"
                  id="idDesc"
                  value={produto.desc}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  id="idPreco"
                  value={produto.preco}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
