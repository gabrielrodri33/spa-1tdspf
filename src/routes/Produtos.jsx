import React from "react";
import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai"
import {RiDeleteBin2Fill as DelObj} from "react-icons/ri";

export default function Produtos() {
  return (
    <>
      <h1>Produtos Informáticos - FIAPO</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR/EXCLUIR</th>
          </tr>
        </thead>
        
        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td> <Link to={`/editar/produtos/${produto.id}`}><EditObj/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><DelObj/></Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
