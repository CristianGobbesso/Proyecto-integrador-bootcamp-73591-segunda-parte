import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import convertirAPesos from "../utils/convertirAPesos"


const ItemCarrito = ({ producto }) => {

    const { eliminarProductoDelCarritoContext, calcularSubtotal } = useContext(CarritoContext)

    const handleEliminar = (id) => {
        console.log('Eliminando el producto...', id)
        eliminarProductoDelCarritoContext(id)
    }

    return (
        <>
            <tr>
                <td >
                    <img src={producto.foto} alt={producto.nombre} width="65px" />
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                {/* convertir a pesos */}
                <td>{convertirAPesos(calcularSubtotal(producto).toFixed(2))}</td>
                <td>
                    <button className='btn-eliminar' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default ItemCarrito