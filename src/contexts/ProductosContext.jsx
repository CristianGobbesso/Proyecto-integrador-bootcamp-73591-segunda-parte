import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { peticionesHttp } from "../helpers/peticiones-http"


const ProductosContext = createContext()

const ProductosProvider = ({ children }) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])


    const getAllProductos = async () => {

        try {
            const prods = await peticionesHttp(url, {})
            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const data = {
        productos
    }

    return <ProductosContext.Provider value={data}>
        {children}
    </ProductosContext.Provider>

}

export { ProductosProvider }
export default ProductosContext