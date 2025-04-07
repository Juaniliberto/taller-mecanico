import '../styles/Navbar.css'
import { useState } from 'react';

function Navbar() {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const navbarHeight = document.querySelector('.barra-navegacion').offsetHeight;
            const sectionPosition = section.offsetTop - 120;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
            setMenuAbierto(false);
        }
    };


    return (
        <nav className='barra-navegacion'>
            <span className='texto'> Servicio CL</span>
            <button 
                className='boton-hamburguesa' 
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                ☰
            </button>
            <div className={`botoneraNavBar ${menuAbierto ? 'mostrar' : ''}`}>
                <button className='botonNavBar' onClick={() => scrollToSection("inicio")}>Introduccion</button>
                <button className='botonNavBar' onClick={() => scrollToSection("bienvenida")}>Bienvenida</button>
                <button className='botonNavBar' onClick={() => scrollToSection("servicios")}>Servicios</button>
                <button className='botonNavBar' onClick={() => scrollToSection("contacto")}>Contactanos</button>
            </div>
        </nav>
    )
}

export default Navbar;