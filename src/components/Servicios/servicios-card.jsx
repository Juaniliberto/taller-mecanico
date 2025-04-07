import "./servicios-card.css"

function ServiciosCard({ imagen, titulo, texto }) {
    return (
        <div className="contServiceCard">
            <div className="contServiceCardImagen">
                <img src={imagen} alt="imagen del servicio" />
            </div>
            <div className="contServiceCardText">
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
            <div className="contServiceCardButton">
                <button className="info-btn">Mas Informacion</button>
            </div>
        </div>
    )
}

export default ServiciosCard