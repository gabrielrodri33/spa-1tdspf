import { Link } from "react-router-dom";
import { AiFillEdit as EditObj } from "react-icons/ai";
import { RiDeleteBin2Fill as DelObj } from "react-icons/ri";
import estilos from "./Produtos.module.css";
import { useState, useEffect } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";

export default function Produtos() {
  document.title = "Lista de Produtos";

  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  useEffect(() => {
    //Criando o bloco de reequisição dos dados utilizando o fetch com promises:
fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("O Status da requisição/request HTTP : " + response.status);
        return response.json()
      })
      .then((data) => {
        setListaProdutosLocal(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Produtos Informáticos - FIAPO</h1>

      { open ? <ModalInserir open={open} setOpen={setOpen}/> : "" }

      <Link onClick={()=> setOpen(true)}>Cadastrar Produtos</Link>  

      <table className={estilos.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR/EXCLUIR</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutosLocal.map((produto, indice) => (
            <tr key={indice} className={estilos.tblLine}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td>
                <img src={produto.img} alt={produto.desc} />
              </td>
              <td>
                {" "}
                <Link to={`/editar/produtos/${produto.id}`}>
                  <EditObj />
                </Link>{" "}
                |{" "}
                <Link to={`/excluir/produtos/${produto.id}`}>
                  <DelObj />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
