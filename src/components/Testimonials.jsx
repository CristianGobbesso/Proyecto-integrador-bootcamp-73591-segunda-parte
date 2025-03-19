import { useState, useEffect } from "react";
import "./Testimonials.scss"; // Importa los estilos

const testimonialsData = [
  { text: "“Excelente atención y productos de primera calidad. Muy recomendable.”", author: "Juan Pérez" },
  { text: "“Compré mi laptop aquí y la experiencia fue increíble. Volveré sin duda.”", author: "María Gómez" },
  { text: "“El mejor lugar para encontrar lo último en tecnología. Atención de 10.”", author: "Carlos Rodríguez" },
  { text: "“Un servicio postventa espectacular. Me ayudaron con todas mis dudas después de la compra.”", author: "Sofía Martínez" },
  { text: "“Gran variedad de productos y precios muy competitivos. ¡Súper recomendable!”", author: "Fernando López" }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prevTestimonials) => [...prevTestimonials].sort(() => Math.random() - 0.5));
    }, 20000); // Cambia cada 20 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials__container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.text}</p>
            <span>- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
