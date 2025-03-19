
import FormularioContacto from "../components/FormularioContacto";
import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'
const Contacto = () => {

  useTitulo('Contacto')


  return (

    <main>
      <section className="section-contact">
        <header className="section-contact__header">
          <h1>Contacto</h1>
        </header>
      </section>

      <section className="section-contact__contacto">

        <FormularioContacto />

        <div className="section-contact__iframe">
          <h2>Encuéntranos con un click!</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26783.47600992991!2d-60.6404608!3d-32.95273864999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses-419!2sar!4v1738519534005!5m2!1ses-419!2sar"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contacto