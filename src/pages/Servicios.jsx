import "../styles/Servicios.css";
import ServiciosCard from "../components/Servicios/servicios-card";
import aceite from "../assets/aceite.jpg";
import motor from "../assets/motor.jpg";
import trenDelantero from "../assets/tren-delantero.jpg";

function Servicios() {
    return (
        <div className="servicios">
            <div className="servicios-texto">
                <h2>Servicios Mecanicos</h2>
                <h3>Expertos en una amplia gama de servicios para su vehiculo</h3>
            </div>
            <div className="tarjetaServicios">
                <ServiciosCard imagen={aceite} titulo="Mantenimiento General del Vehículo" texto="La clave para un auto seguro y eficiente es un mantenimiento regular. En nuestro taller, realizamos el cambio de aceite, filtros y revisión completa del sistema de frenos para asegurarnos de que tu vehículo funcione de manera óptima. Prevenir desgastes y averías te ayuda a evitar costos mayores en el futuro."/>
                <ServiciosCard imagen={trenDelantero} titulo="Reparación de Suspensión, Dirección y Frenos" texto="La estabilidad y seguridad de tu vehículo dependen de un sistema de suspensión y dirección en óptimas condiciones. En nuestro taller revisamos y reparamos amortiguadores, bujes, parrillas, extremos, cremallera de dirección y todo el sistema de frenos. Nos aseguramos de que tu auto responda con precisión y seguridad en cada maniobra."/>
                <ServiciosCard imagen={motor} titulo="Reparación y Mantenimiento de Motores" texto="El motor es el corazón de tu vehículo, y un mantenimiento adecuado prolonga su vida útil y rendimiento. En nuestro taller realizamos cambios de juntas, reparación de culatas, ajuste de válvulas, reemplazo de correas y cadenas de distribución, así como reconstrucción completa del motor si es necesario. Devolvemos la potencia y eficiencia a tu vehículo para que siga funcionando como nuevo."/>
            </div>
        </div>
    )
}

export default Servicios