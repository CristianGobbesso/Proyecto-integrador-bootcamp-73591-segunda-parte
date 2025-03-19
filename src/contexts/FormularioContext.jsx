import { createContext, useState } from "react";


const FormularioContext = createContext()

const FormularioProvider = ({ children }) => {

  const formularioInicial = {
    nombre: "",
    apellido: "",
    email: "",
    comentarios: "",
  }

  const [formularioData, setFormularioData] = useState(formularioInicial);
  const [errors, setErrors] = useState({})

  const data = {
    formularioData,
    setFormularioData,
    formularioInicial,
    errors,
    setErrors
  }

  return <FormularioContext.Provider value={data}>
    {children}
  </FormularioContext.Provider>

}
export { FormularioProvider }
export default FormularioContext