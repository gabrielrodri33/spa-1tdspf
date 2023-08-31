import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {
  //Recuperando o id que chega no request através do PATH.
  //Vamos urtilizar o Hook useParams().

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => {
     if(produto.id == id){
        return produto;
     }
  });

  const objProdutoRecuperado = produtoRecuperado[0];

  return (
    <>
      <h1>EditarProdutos</h1>
      <h2>PRODUTO</h2>
      <p>NOME : {objProdutoRecuperado.nome}</p>
      <p>DESCRIÇÃO : {objProdutoRecuperado.desc}</p>
      <p>PREÇO : {objProdutoRecuperado.preco}</p>
    </>
  );
}
