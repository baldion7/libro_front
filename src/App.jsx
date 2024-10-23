import { Carousel } from './components/Carousel.jsx'
import { Present } from './components/Present.jsx'
import { ImgPrincipal } from './components/ImgPrincipal.jsx'
import { About1 } from './components/About1.jsx'
import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { estudent, estudents } from './data/Estudents.js'
import { Quiver } from './components/Quiver.jsx'
import { Navbar } from './components/Navbar.jsx'
import { ModalEstudent } from './components/ModalEstudent.jsx'
import { PostActivityProyect } from './data/PostActivityProyect.js'
import { PostActivityPrimero } from './data/PostActivityPrimero.js'
import './Styles/Carousel.scss'
import './App.css'
import { Justificacion } from './components/Justificacion.jsx'
import { CommentForm } from './components/CommentForm.jsx'
import { BotonFlotante } from './components/BotonFlotante.jsx'
import { CaracterisacionPrimero } from './components/CaracterisacionPrimero.jsx'
import { CaracterisacionCuarto } from './components/CaracterisacionCuarto.jsx'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange.jsx'
import { Team } from './components/Team.jsx'
import { Resultados } from './components/Resultados.jsx'
import MetodologiaSection from './components/MetodologiaSection.jsx'
import {CaracterisacionTransicion} from "./components/CaracterisacionTransicion.jsx";
import {ActivityTransicion} from "./components/ActivityTransicion.jsx";


function App () {
  const [localhost, setLocalhost] = useState(null)
  const [estudiante, setEstudiante] = useState(1)
  const [text, setText] = useState(null)
  const [showComponent, setShowComponent] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Obtener el nombre del host y el puerto
    const host = window.location.hostname
    const port = window.location.port

    setLocalhost(`http://${host}:${port}`)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true)
    }, 64000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  const setopen = () => {
    if (showComponent === true) setOpen(!open)
  }
  const settext = (text) => {
    setText(text)
  }
  const setestudiante = (id) => {
    setEstudiante(id)
  }
  const myComponentRef = useRef();

  const scrollToComponent = () => {
    myComponentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Router>
        <Navbar scrollToComponent={scrollToComponent} rute={localhost}/>
        <ImgPrincipal localhost={localhost}/>
        <div className="wrapper flex flex-wrap " style={{backgroundImage: `url(https://media.istockphoto.com/id/859526062/es/foto/azul-crayola-acuarela-dibujo-textura-de-fondo.jpg?s=170667a&w=0&k=20&c=grbgBxT9BOornUYVTijXZttFr3YnIGpmBOUyYopMiIw=)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          <div className="carousel">
            {estudents.map(({ img, name, unicode, id }) => (
              <Carousel id={id} img={img} name={name} unicode={unicode} key={id} localhost={localhost}
                        setestudiante={setestudiante} text={true} setText={settext} setopen={setopen}/>
            ))}
          </div>
          <div className={'flex justify-center items-center flex-col'}>
            <h1 style={{fontSize: '40px', fontFamily: 'Indie Flower, cursive',}}>COMO ME VEN</h1>
           <img src="/src/video/watching-eyes-unscreen.gif" />
          </div>
          <div className="carousel">
            {estudent.map(({ img, name, unicode, id }) => (
              <Carousel id={id} img={img} name={name} unicode={unicode} key={id} localhost={localhost}
                        setestudiante={setestudiante} text={false} setText={settext} setopen={setopen}/>
            ))}
          </div>
        </div>
        <ModalEstudent open={open} setopen={setopen} id={estudiante} text={text} localhost={localhost}/>
          <ScrollToTopOnRouteChange>
            <div id="seccion-destino">
              <Routes>
                <Route index element={<Justificacion rute={localhost}/>}/>
                <Route path="/" lement={<Justificacion rute={localhost}/>}/>
                <Route path="/resultados" element={<Resultados rute={localhost}/>}/>
                <Route path="/post/:id" element={<About1 rute={localhost} actividades={PostActivityProyect}/>}/>
                <Route path="/primero/:id" element={<About1 rute={localhost} actividades={PostActivityPrimero}/>}/>
                <Route path="/trancion/carecterizacion" element={<CaracterisacionTransicion rute={localhost}/>}/>
                <Route path="/trancion/actividades" element={<ActivityTransicion rute={localhost}/>}/>
                <Route path="/justificacion" element={<Justificacion rute={localhost}/>}/>
                <Route path="/primero" element={<CaracterisacionPrimero rute={localhost}/>}/>
                <Route path="/cuarto" element={<CaracterisacionCuarto rute={localhost}/>}/>
                <Route path="/quiver" element={<Quiver/>}/>
                <Route path="/metodologia" element={<MetodologiaSection/>}/>
                <Route path='*' element={<Navigate to='/' replace/>}/>

              </Routes>

            </div>
          </ScrollToTopOnRouteChange>
        <Present/>
        <Team  rute={localhost}/>
        <BotonFlotante/>
        <div ref={myComponentRef}>
        <CommentForm/>
        </div>
      </Router>

    </>
  )
}

export default App
