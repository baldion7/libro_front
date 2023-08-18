import { Carousel } from './components/Carousel.jsx'
import { Present } from './components/Present.jsx'
import { ImgPrincipal } from './components/ImgPrincipal.jsx'
import { About1 } from './components/About1.jsx'
import { useEffect, useState } from 'react'
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
    console.log(estudiante)
  }

  return (
    <>
      <Router>
        <Navbar/>
        <ImgPrincipal localhost={localhost}/>
        <div className="wrapper flex flex-wrap ">
          <div className="carousel">
            {estudents.map(({ img, name, unicode, id }) => (
              <Carousel id={id} img={img} name={name} unicode={unicode} key={id} localhost={localhost}
                        setestudiante={setestudiante} text={true} setText={settext} setopen={setopen}/>
            ))}
          </div>
          <div className="carousel">
            {estudent.map(({ img, name, unicode, id }) => (
              <Carousel id={id} img={img} name={name} unicode={unicode} key={id} localhost={localhost}
                        setestudiante={setestudiante} text={false} setText={settext} setopen={setopen}/>
            ))}
          </div>
        </div>
        <ModalEstudent open={open} setopen={setopen} id={estudiante} text={text} localhost={localhost}/>
        <Routes>
          <Route exact path="/" lement={<Justificacion/>}/>
          <Route path="/post/:id" element={<About1 rute={localhost} actividades={PostActivityProyect}/>}/>
          <Route path="/primero/:id" element={<About1 rute={localhost} actividades={PostActivityPrimero}/>}/>
          <Route path="/justificacion" element={<Justificacion rute={localhost}/>}/>
          <Route path="/quiver" element={<Quiver/>}/>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Present/>
        <CommentForm/>
      </Router>

    </>
  )
}

export default App
