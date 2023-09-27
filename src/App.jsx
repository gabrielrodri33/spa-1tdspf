import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import style from "./App.module.css";

export default function App() {
  return (
    <>
      {/* Área imperativa */}
      <div className={style.container}>
      <Cabecalho />
        <Outlet/>
      <Rodape />
      </div>
    </>
  );
}
