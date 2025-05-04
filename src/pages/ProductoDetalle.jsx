import './ProductoDetalle.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'
import convertirAPesos from "../utils/convertirAPesos"

const ProductoDetalle = () => {
  const { id } = useParams()

  console.log(id)
  

  const [productoDetalle, setProductoDetalle] = useState(null)

  useEffect(() => {

    getOne(id)

  }, [])
 
  const getOne = async (id) => {


    const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id

    try {
      const res = await fetch(urlGetOne)

      if (!res.ok) {
        throw new Error('No se pudo obtener el producto')
      }

      const data = await res.json()
      console.log('Producto recibido:', data)
      setProductoDetalle(data)

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <section className="section-detalle">
        <header className="section-detalle__header">
          <h1>Producto detalle</h1>

        </header>
      </section>

      {
        productoDetalle ?
          (

            <section className='section-detalle__producto-Detalle'>
              <h2> {productoDetalle.nombre}</h2>
              {console.log('Foto del producto:', productoDetalle.foto)}
              <img src={`${productoDetalle.foto}`} alt={productoDetalle.nombre} />
              
              <p>Marca: {productoDetalle.marca}</p>
              <p>Categoria: {productoDetalle.categoria}</p>
              <p>Detalles: {productoDetalle.detalles}</p>
              {/* convertir a pesos */}
              <p><strong>A tan solo:</strong> {convertirAPesos(productoDetalle.precio)}</p>
            </section>

          ) :
          (
            <Spinner />
          )
      }
    </>
  )
}

export default ProductoDetalle