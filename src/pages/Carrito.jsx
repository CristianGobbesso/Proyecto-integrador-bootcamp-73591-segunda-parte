import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"


const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <section className="section-carrito">
        <header className="section-carrito__header">
          <h1>Productos en el carrito</h1>
        </header>
      </section>

      <ListadoCarrito />
    </>
  )
}

export default Carrito