import { DropdownsActivityCuarto } from './DropdownsActivityCuarto.jsx'
import { TabsPost } from './TabsPost.jsx'
import { ButtonsRemenber } from './ButtonsRemenber.jsx'
import { DropdownsActivityprimero } from './DropdownsActivityprimero.jsx'
import { Inicio } from './Inicio.jsx'
import { Link } from 'react-router-dom'
import {DropdownsActivityTransicion} from "./DropdownsActivityTransicion.jsx";

export const Navbar = ({scrollToComponent,rute}) => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 sticky top-0 z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center">
            <img src={rute+"/img/WhatsApp Image 2023-09-16 at 10.33.49 PM.jpeg"} className="h-12 mr-3" alt="Flowbite Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-Edu">OLE, VENGA LE CUENTO</span>
          </a>

          <img src="https://colgalangiron.edu.co/wp-content/uploads/2024/06/escudo_colegio_-luis_carlos_galan.jpg" className="h-12 mr-3" alt="Flowbite Logo"/>
          <div id="mega-menu-full"
               className="items-center justify-between font-medium  w-full md:flex md:w-auto md:order-1">
            <ul
              className="flex flex-row p-4 md:p-0 items-center justify-center  flex-wrap border border-gray-100 rounded-lg bg-gray-50 md:flex-row sm:flex-col md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Inicio/>
              </li>
              <li>
                <DropdownsActivityCuarto/>
              </li>
              <li>
                <DropdownsActivityprimero/>
              </li>
              <li>
                <DropdownsActivityTransicion/>
              </li>
              <li>
                <ButtonsRemenber/>
              </li>
              <li >
                <Link to={'/resultados'}  style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgxecKfrTTRFizEwsOrsrj51Vpg9lZ8j8hQ&usqp=CAU)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',fontSize: '17px', borderRadius: '10px',padding: '7px' }}> RESULTADOS</Link>
              </li>
              <li>
                  <button onClick={scrollToComponent} style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgxecKfrTTRFizEwsOrsrj51Vpg9lZ8j8hQ&usqp=CAU)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',fontSize: '17px', borderRadius: '10px',padding: '7px' }}> COMENTARIOS</button>
              </li>
              <lil>
                <Link to={'https://www.maestraenaccion.website/'}>
                  <video autoPlay loop muted playsInline className={"h-24"}>
                    <source src="/videos/Video de WhatsApp 2024-10-22 a las 18.19.09_e6a6a4d4.mp4" type="video/mp4"/>
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </Link>
              </lil>
            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}