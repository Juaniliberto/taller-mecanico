import "./welcome-card.css";

function WelcomeCard({ imagen, titulo, texto }) {
    return (
        <div className="welcome-card">
            <div className="welcome-card-2">
                <div className="imagenDiv">
                    <img className="imagen" src={imagen} alt="Imagen de ejemplo"/>
                </div>
                <div className="welcome-card-text">
                    <h1>{titulo}</h1>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeCard;