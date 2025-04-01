import '../styles/Navbar.css';

function Navbar() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          const navbarHeight = document.querySelector('.barra-navegacion').offsetHeight;
          const sectionPosition = section.offsetTop - 120;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      };

    return (
        <nav className='barra-navegacion'>
            <span className='texto'> Servicio CL</span>
            <div className='botoneraNavBar'>
                <button className='botonNavBar' onClick={() => scrollToSection("inicio")}>Introduccion</button>
                <button className='botonNavBar' onClick={() => scrollToSection("bienvenida")}>Bienvenida</button>
                <button className='botonNavBar' onClick={() => scrollToSection("servicios")}>Servicios</button>
                <button className='botonNavBar' onClick={() => scrollToSection("contacto")}>Contactanos</button>
            </div>
            {/* <ul>
                <li><a href="#inicio" className="texto">Introduccion</a></li>
                <li><a href="#bienvenida" className="texto">Bienvenida</a></li>
                <li><a href="#servicios" className="texto">Servicios</a></li>
                <li><a href="#testimonios" className="texto">Testimonios</a></li>
                <li><a href="#galeria" className="texto">Galería</a></li>
                <li><a href="#contacto" className="texto">Contáctanos</a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar;