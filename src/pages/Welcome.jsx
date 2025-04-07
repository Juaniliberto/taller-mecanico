import WelcomeCard from "../components/welcome-component/welcome-card";
import apreton from "../assets/apreton2.jpg";
import entrega from "../assets/entrega.jpg";
import check from "../assets/check2.jpg";
import "../styles/welcome.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Welcome() {
    const tarjetas = [
        { imagen: apreton, titulo: "Atencion Personalizada", texto: "Nos enfocamos en cada cliente de manera única, brindando asesoramiento claro y honesto para garantizar que tu vehículo reciba el mejor cuidado. Tu tranquilidad es nuestra prioridad"},
        { imagen: check, titulo: "Entrega en Tiempo y Forma", texto: "Sabemos lo importante que es tu tiempo. Por eso, trabajamos con eficiencia y compromiso para entregarte tu vehículo cuando lo prometimos, sin retrasos innecesarios."},
        { imagen: entrega, titulo: "Garantía de Calidad", texto: "Utilizamos repuestos de primera calidad y aplicamos estrictos controles en cada reparación. Respaldamos nuestro trabajo con garantía para que manejes con total confianza."}
    ];

    const [indice, setIndice] = useState(0);
    const [direccion, setDireccion] = useState(1);

    const siguiente = () => {
        setDireccion(1);
        setIndice((prev) => (prev + 1) % tarjetas.length);
    };

    const anterior = () => {
        setDireccion(-1);
        setIndice((prev) => (prev -1 + tarjetas.length) % tarjetas.length);
    };

    return (
        <div id="bienvenida" className="primerDiv">
            <div className="welcome">
                <button className="boton izq" onClick={anterior}></button>
                <div className="cardWelcome">
                    <div className="tarjeta-ind">
                        <div className="card-ind">
                            <AnimatePresence mode="wait" custom={direccion}>
                                <motion.div
                                    key={indice}
                                    
                                    initial={{ opacity: 0, x: direccion * -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direccion * 100 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <WelcomeCard 
                                        imagen={tarjetas[indice].imagen} 
                                        titulo={tarjetas[indice].titulo} 
                                        texto={tarjetas[indice].texto} 
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                        <div className="indicadores">
                            {tarjetas.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`circulo ${i === indice ? "activo" : ""}`}
                                    onClick={() => setIndice(i)} // Para que puedas cambiar de tarjeta al hacer clic en los círculos
                                />
                            ))}
                        </div>
                </div>
                <button className="boton der" onClick={siguiente}></button>
            </div>
        </div>
    )
}

export default Welcome;