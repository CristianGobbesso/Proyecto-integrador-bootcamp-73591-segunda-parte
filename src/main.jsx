import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import { FormularioProvider } from './hooks/FormularioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>

      <ProductosProvider>

        <FormularioProvider>
    
          <App />
    
        </FormularioProvider>
    
      </ProductosProvider>

    </CarritoProvider>
  </StrictMode>,
)
