import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Styles/ActivityTransicion.css"

export const ActivityTransicion = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="container">
                <h1 className={'titletransicion'}>GRAFICANDO MI RIMA</h1>

                <div className="content">
                    <img src="imagen1.png" alt="Dibujo de niño"/>
                    <div className="text">
                        <p>El festival de disfraces se convirtió en una vibrante celebración que integró a toda la
                            comunidad educativa, destacando la oralidad de los estudiantes de quinto y transición a
                            través de rimas y poemas trabajados durante el año.</p>
                    </div>
                    <img src="imagen2.png" alt="Niño dibujando"/>
                </div>
            </div>
        </>
    )
}