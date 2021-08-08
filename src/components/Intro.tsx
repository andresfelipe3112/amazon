import "./intro.css"
import logoBlanco from "../img/logoBlanco.png"

function Intro() {
    return (
        <div className="containerInicial">
            <div className="ContaineIntro">

                <h1 className="titleIntro">Vende en Amazon </h1>
                <h2 className="subtitleIntro">Un 73% de los consumidores  acude a Amazon como primera opción a la hora de realizar una compra online, imagina tus productos vendiendose ahí 24/7. </h2>
                <img id="logoBlanco" src={logoBlanco} alt="" />

                {/* <div className="ContainerSubtitleIntroDos">
                    <span className="btn-grad">Porque Vender</span>
                    <span className="btn-grad"> Nuestros Programas</span>
                    <span className="btn-grad"> Contacto</span>
                </div> */}

            </div>
            <div className="imagen">


                {/* <h3 className="subtitleIntroDos"> Importa desde China y vende en Amazon </h3> */}
                <iframe width="660" height="355" src="https://www.youtube.com/embed/v4EY3UIhbqI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Intro
