import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate } from "react-router-dom";

export default function CriarProduto() {

    const navigate = useNavigate()

  const [novoProduto, setNovoProduto] = useState({
    id: Math.floor(Math.random() * 100),
    nome: '',
    desc: '',
    img: "https://picsum.photos/200/300",
    preco: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ListaProdutos.push(novoProduto)
    
    alert("Produto criado com sucesso")

    navigate("/produtos")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Qual produto deseja adicionar</legend>
          <div>
            <label htmlFor="idNome">Nome: </label>
            <input
              type="text"
              name="nome"
              id="idNome"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição: </label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idPreco">Preço: </label>
            <input
              type="text"
              name="preco"
              id="idPreco"
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <div>
          <button>Adicionar Produto</button>
        </div>
      </form>
    </div>
  );
}