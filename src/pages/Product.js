import "./Product.css"

import {useFetch} from "../hooks/useFetch";
import { useParams } from "react-router-dom";


const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;
  const {data: product, loading, error} = useFetch(url);

  return (
    <>
      <h1 className="titleTwo">Detalhes</h1>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando produtos...</p>}
      {product && (
        <div className="items">
            <p>ID do produto: {id}</p>
            <p className="titleTwo">{product.name}</p>
            <h4>R${product.price}</h4>
            <img className="image" src={process.env.PUBLIC_URL + '/' + product.imagem} alt={product.name} />
        </div>
      )}
    </>
  )
}

export default Product;