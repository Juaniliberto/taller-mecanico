import "../styles/Contact.css";
const phoneNumber = "(+54) 011 23456789";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Contáctanos</h2>
                <h3>Estamos para ayudarle con todas sus necesidades mecánicas. No dude en comunicarse con nosotros.</h3>
            </div>
            <div className="form-info">
                <div className="info">
                    <div className="mail">
                        <h3 className="titulo">MAIL:</h3>
                        <h3>serviciocl@gmail.com</h3>
                    </div>
                    <div className="telefono">
                        <h3 className="titulo">TELEFONO:</h3>
                        <h3>{phoneNumber}</h3>
                    </div>
                    <div className="ubicacion">
                        <h3 className="titulo">UBICACION:</h3>
                        <h3>Av. Espora 1570 - Adrogue</h3>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <input className="input" type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                        <input className="input" type="text" name="email" id="email" placeholder="Email"/>
                        <textarea className="input" rows={8} name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
                        <input className="boton-enviar" type="submit" name="submit" id="submit" placeholder="Enviar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact