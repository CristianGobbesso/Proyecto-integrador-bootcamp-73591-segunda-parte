import { useContext } from "react"
import convertirAPesos from "../utils/convertirAPesos"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'
import CarritoContext from "../contexts/CarritoContext"

const ListadoCarrito = () => {
    

    const { carrito,
         calcularTotal,
         calcularTotalItems,
         limpiarCarritoContext,
         guardarCarritoBackendContext
         } = useContext(CarritoContext)
    
    console.log(carrito)

    const handleComprar = () => {
        console.log('Comprando...')
        guardarCarritoBackendContext()
    }
    
    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }

  return (
    <div className="table-wrapper">
    <table className='tabla-carrito '>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    ))
                )
            }
        </tbody>
        {carrito.length > 0 && (
                    <tfoot>
                    <tr>
                      {/* Total de Items alineado debajo de Nombre y Cantidad */}
                      <td colSpan={2} className="total-items-label">Total de Items:</td>
                      <td className="total-items-valor">{calcularTotalItems()}</td>
                  
                      {/* Total alineado debajo de Acciones */}
                      <td colSpan={1} className="total-label">Total:</td>
                      {/* convertir a pesos */}
                      <td className="total-valor">{convertirAPesos(calcularTotal().toFixed(2))}</td>
                    </tr>
                  </tfoot>
                  
                )}
    </table>
    {/* <hr /> */}
    { !carrito.length <= 0 && (
            <>
                <button className="btn-vaciar-carrito" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                <button className="btn-comprar" onClick={handleComprar}>Comprar</button>
            </>
        )
    }
</div>
  )
}

export default ListadoCarrito