import React, { useContext } from 'react'
import FormularioContext from '../contexts/FormularioContext';

const FormularioContacto = () => {

  const { formularioData, setFormularioData, formularioInicial, errors, setErrors } = useContext(FormularioContext)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormularioData({
      ...formularioData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validaciones de los campos
    if (!formularioData.nombre) {
      validationErrors.nombre = "El nombre es obligatorio";
    }

    if (!formularioData.apellido) {
      validationErrors.apellido = "El apellido es obligatorio";
    }

    if (!formularioData.email) {
      validationErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formularioData.email)) {
      validationErrors.email = "El email no es válido";
    }

    if (!formularioData.comentarios) {
      validationErrors.comentarios = "Los comentarios son obligatorios";
    }

    if (validationErrors.email || validationErrors.apellido || validationErrors.nombre || validationErrors.comentarios) {
      setErrors(validationErrors);
      console.log("Errores en el formulario:", validationErrors)
      return;
    }

  
    console.log("Formulario enviado:", formularioData);

    setErrors({});
    setFormularioData(formularioInicial);
  };



  return (
    <form className="section-contact__form" id="contact-form" onSubmit={handleSubmit}>

      <label htmlFor="nombre">Nombre:</label>

      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formularioData.nombre}
        onChange={handleChange}
      />
      {errors.nombre ? <small>{errors.nombre}</small> : null}


      <label htmlFor="apellido">Apellido:</label>

      <input
        type="text"
        id="apellido"
        name="apellido"
        value={formularioData.apellido}
        onChange={handleChange}
      />

      {errors.apellido ? <small>{errors.apellido}</small> : null}


      <label htmlFor="email">Email:</label>

      <input
        type="email"
        id="email"
        name="email"
        value={formularioData.email}
        onChange={handleChange}
      />

      {errors.email ? <small>{errors.email}</small> : null}


      <label htmlFor="comentarios">Comentarios:</label>

      <textarea
        id="comentarios"
        name="comentarios"
        rows="5"
        value={formularioData.comentarios}
        onChange={handleChange}
        placeholder="Escribe tus comentarios aquí..."
      >
      </textarea>

      {errors.comentarios ? <small>{errors.comentarios}</small> : null}


      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioContacto