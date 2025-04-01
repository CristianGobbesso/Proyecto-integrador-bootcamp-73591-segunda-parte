import Testimonials from "../components/Testimonials"; // Importa el componente
import useTitulo from "../hooks/useTitulo";

const Nosotros = () => {
  useTitulo('Nosotros')

  return (
    <main>
      <section className="section-about-us">
        <header className="section-about-us__header">
          <h1>Sobre nosotros</h1>
        </header>
      </section>

      <section className="section-about-us__nosotros">
        <article>
          <h2>Pasión por la Tecnología y la Innovación.</h2>
          <p>
            En <span className="brackets">{"{"}</span> <strong>CODEX</strong> <span className="brackets"> {"}"} </span>, somos apasionados por la tecnología y su impacto en la vida cotidiana.
            Ubicados en la ciudad de Rosario, ofrecemos una amplia gama de productos tecnológicos de última generación.
          </p>
        </article>

        <figure className="section-about-us__img">
          <img
            src="../../imgs/local-nosotros.webp"
            alt="Sucursal de CODEX en Rosario con productos exhibidos y clientes explorando."
          />
          <figcaption>Sucursal Rosario.</figcaption>
        </figure>

        <article>
          <p>
            Creemos que la tecnología es más que un conjunto de dispositivos, es una herramienta que transforma vidas.
            Nos dedicamos a ofrecer lo mejor en innovación, calidad y servicio.
          </p>
          <p>
            Contamos con un espacio moderno donde puedes probar productos antes de comprarlos y recibir asesoramiento personalizado.
          </p>
          <p>
            Además, en <span className="brackets">{"{"}</span> <strong>CODEX</strong> <span className="brackets"> {"}"} </span> nos preocupamos por la satisfacción de nuestros clientes con garantías extendidas,
            soporte técnico y opciones de financiamiento accesibles.
          </p>
          <p>
            ¡Te esperamos para descubrir juntos la innovación y vivir la tecnología de una manera única en <span className="brackets">{"{"}</span> <strong>CODEX</strong> <span className="brackets"> {"}"} </span>
          </p>
        </article>
      </section>

      {/* Sección de Testimonios (Usando el nuevo componente) */}
      <Testimonials />
    </main>
  );
};

export default Nosotros;
