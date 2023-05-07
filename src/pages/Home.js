import "./Home.css";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:3000/products"
  const {data: items, loading, error} = useFetch(url)

  return (
    <div className="box-itens">
      <h1 className="title">Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Home