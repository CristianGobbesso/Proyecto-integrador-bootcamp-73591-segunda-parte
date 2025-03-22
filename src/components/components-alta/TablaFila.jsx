import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import {  useNavigate } from "react-router"

const TablaFila = ({producto}) => {

  const {eliminarProductoContext, setProductoAEditar} = useContext(ProductosContext)

  const navigate = useNavigate()

const handleEliminar = (id) => {
  //hacer lo del sweet alert
  eliminarProductoContext(id)
}

const handleEditar = (producto) => {
  setProductoAEditar(producto)
}
const handleVer = (id) => {
  console.log(id)
  navigate(`/alta/detalle/${id}`)
}

  return (
    <tr>
    <td>{producto.nombre}</td>
    <td>{producto.precio}</td>
    <td>{producto.stock}</td>
    <td>{producto.marca}</td>
    <td>{producto.categoria}</td>
    <td>{producto.detalles}</td>
    <td>
        <img src={producto.foto } alt={producto.nombre} style={{ width: '40px'}} />
    </td>
    <td>{producto.envio? 'si' : 'no'}</td>
    <td>
        <button onClick={() => handleVer(producto.id)} >Ver</button>
        <button onClick={() => handleEditar(producto)} >Editar</button>
        <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
    </td>
</tr>
  )
}

export default TablaFila 