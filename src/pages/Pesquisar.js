import "./Pesquisar.css";

import {SearchForm} from "../components/SearchForm";


const Pesquisar = () => {
  return (
    <div className="pesquisa">
        <h1>Pesquise seu item aqui</h1>
        <SearchForm />
    </div>
  )
}

export default Pesquisar