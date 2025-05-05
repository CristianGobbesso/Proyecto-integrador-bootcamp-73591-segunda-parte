import './Footer.scss'

const Footer = () => {
  return (
    
  <footer className="footer">
  <div className="footer__left">© 2025 Todos los derechos reservados.</div>
  <div className="footer__social-icons">
    <a href="https://www.facebook.com/" target="_blank"><img src="./icons/facebook.svg"
        alt="icono de la red social facebook"/></a>
    <a href="https://www.instagram.com/" target="_blank"><img src="./icons/instagram.svg"
        alt="icono de la red social instagram" /></a>
  </div>
  <div className="footer__right"><a href="https://ar.linkedin.com/in/cristian-gobbesso-7833591b2" target="_blank">Desarrollado por Cristian
      Gobbesso.</a></div>
</footer>
  )
}

export default Footer