import './Inicio.scss'
import { useContext } from "react"
import Card from "../components/Card"
import ProductosContext from "../contexts/ProductosContext"
import useTitulo from '../hooks/useTitulo'

const Inicio = () => {
  
  const {productos}= useContext(ProductosContext)
  
  useTitulo('Inicio')
  return (

      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Encotra los mejores productos en <span className="brackets">{"{"}</span> CODEX <span className="brackets"> {"}"} </span></h1>
            <p>Se encontraron X productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          {
            productos && productos.map ((producto) =>(

              <Card producto={producto} key={producto.id} />
            )
            )
          }
        </section>

      </main>

    
  )
}

export default Inicio