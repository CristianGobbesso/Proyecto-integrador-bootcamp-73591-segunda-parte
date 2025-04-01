import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import './Alta.scss'


const Alta = () => {

  useTitulo('Alta')

  return (

    <>
      <section className="section-alta">
        <header className="section-alta__header">
          <h1>Formulario de Alta de Productos</h1>

        </header>
      </section>

      <Formulario />
      <Tabla />


    </>
  )
}

export default Alta