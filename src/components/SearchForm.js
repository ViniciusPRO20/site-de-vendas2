import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./SearchForm.css";


export const SearchForm = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search?q=" + query);
  }

  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmit}>
          <input className="caixa" type="text" onChange={(e) => setQuery(e.target.value)} />
          <input className="buscar" type="submit" value="Buscar" />
      </form>
    </div>
  )
}