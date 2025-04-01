import "./styles/App.css";

import Navbar from "./pages/Navbar";
import Inicio from "./pages/Inicio";
import Welcome from "./pages/Welcome";
import Servicios from "./pages/Servicios";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <Navbar />
      <section id="inicio">
        <Inicio/>
      </section>
      <section id="bienvenida">
        <Welcome/>
      </section>
      <section id="servicios">
        <Servicios/>
      </section>
      <section id="contacto">
        <Contact />
      </section>
    </>
  )
}

export default App
