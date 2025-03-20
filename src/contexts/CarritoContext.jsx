import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const CarritoContext = createContext()

const CarritoProvider = ( {children} ) => {

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto) {
        //return true/false
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        // 1 -> El producto ya esta en el carrito
        // 0 -> el producto no esta en el carrito
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto) {
        // Si encuentra el producto lo retorna
        return carrito.find(prod => prod.id === producto.id)
    }


    const agregarProductoAlCarritoContext = (producto) => {
        console.log('Ya estoy en el agregar del contexto', producto)

        // Averiguo si está o no está en el carrito y hago en consecuencia
        if (!elProductoEstaEnElCarrito(producto)) {
            console.log('No esta en el carrito')
            producto.cantidad = 1
            agregarAlCarrito(producto) // Agregar el producto en el localStorage y modificar estado
        } else {
            console.log('Ya esta en el carrito')
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const calcularSubtotal = (producto) => producto.cantidad * producto.precio;

    
    const calcularTotal = () => carrito.reduce((total, prod) => total + calcularSubtotal(prod), 0);

    const calcularTotalItems = () => carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const data = {
        agregarProductoAlCarritoContext,
        carrito,
        limpiarCarrito,
        calcularTotal,  
        calcularSubtotal,
        calcularTotalItems
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }
export default CarritoContext