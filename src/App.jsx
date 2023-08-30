import { Outlet } from "react-router-dom"
import Cabecalho from "./components/Cabecalho"
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"

export default function App(){

  //Área declarativa

  return (
    <>
      {/* Área imperativa */}
      <Cabecalho/>
      
      <Outlet/>

      <Rodape/>
    </>
  )
}