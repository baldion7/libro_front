import { CarouselJustification } from './CarouselJustification.jsx'

export const Justificacion = ({ rute }) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800" style={{backgroundImage: `url(https://img.freepik.com/foto-gratis/textura-papel-gris_1253-25.jpg?w=2000)`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
        <div className="flex max-w-screen-xl px-4 py-8 mx-auto  justify-center items-centers">
          <div className="mr-auto w-full flex items-center flex-col ">
            <h1
              className="p-10 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              JUSTIFICACION
            </h1>
            <div className="">
              <img
                src={'src/img/ImgJustificacion.jpeg'}
                className="imagen" alt=""/>
              <p>
              <p className=" parrafo  ">
                El proyecto: <strong>OLE, venga le cuento</strong> (Oralidad, Lectura y Escritura) sin dejar atrás la
                memoria como recurso de recordar momentos vividos en el trascender de la vida, se centra en el interés
                de
                las docentes del Colegio Luis Carlos Galán Sarmiento, Sede B El Consuelo, en apoyar los procesos de
                aprendizaje de los estudiantes de grado cuarto quienes vienen siendo el grupo focalizado de estudio
                desde
                el preescolar. El proyecto "OLE , venga le cuento", busca desarrollar habilidades comunicativas
                fundamentales desde el grado primero (1-1 JT) por motivación de la docente titular de aplicar las
                herramientas, instrumentos, estrategias pedagógicas  y afianzarlas de manera en grado cuarto: (4-1 JM) y así,
                puedan tener una perspectiva de su su proyecto de vida. Para ello, para ello se seleccionan herramientas
                proporcionadas por el Ministerio de Educación Nacional y la Secretaría de Educación Municipal.
                </p>
                  El proyecto educativo "OLE, venga le cuento" retoma el trabajo de años anteriores y crea instrumentos
                  que nos acerca a la comprensión del contexto y a la realidad que ha los niños les ha correspondido
                  vivir y sobre la cual los docentes ejercemos una transformación que nos conduce a la creación
                  colaborativa de un libro con sus propios relatos e historias personales, que busca estimular su
                  creatividad literaria y el desarrollo de competencias comunicativas.
                  <br/>
                  El proyecto educativo "OLE, venga le cuento" retoma el trabajo de años anteriores y crea instrumentos
                  que nos acerca a la comprensión del contexto y a la realidad que ha los niños les ha correspondido
                  vivir y sobre la cual los docentes ejercemos una transformación que nos conduce a la creación
                  colaborativa de un libro con sus propios relatos e historias personales, que busca estimular su
                  creatividad literaria y el desarrollo de competencias comunicativas.
                  Las diversas actividades interactivas planteadas, como jornadas de lectura, sesiones de escritura
                  creativa y diálogos intergeneracionales, son esenciales para recopilar anécdotas familiares y del
                  entorno que enriquezcan el libro. La aplicación de realidad aumentada Quiver refuerza este proceso al
                  facilitar la interacción con representaciones 3D.

                  <br/>
                  La metodología utilizada en el colegio se basa en el Aprendizaje Basado en Problemas (ABP), que
                  promueve una educación centrada en la experiencia vivencial, la participación y la reflexión constante
                  sobre lo aprendido. También se integran las memorias y experiencias de los abuelos, enriqueciendo el
                  proceso educativo y creando un vínculo intergeneracional significativo.
                  <br/>
                  De esta forma, se justifica el proyecto por sus efectos positivos: mejoras observadas en habilidades
                  literarias y comunicativas de los estudiantes, fortalecimiento del vínculo con su comunidad y la
                  exitosa
                  creación del primer libro elaborado en la escuela como invaluable aporte cultural y literario.
                  <br/>
                  La creación del libro con los relatos propios de los estudiantes buscan promover estrategias de
                  promoción de lectura, escritura, oralidad y memoria, como iniciativas simbólicas de creación literaria
                  que contribuyan en la formación integral de los estudiantes y en el fortalecimiento del tejido
                  comunitario a través de los años escolares retomando aquello que nos queda en la memoria, para
                  plasmarlo en relatos.
                </p>

            </div>
          </div>
        </div>
        <div className=" lg:col-span-5 lg:flex">
          <CarouselJustification rute={rute}/>
        </div>
      </section>
    </>
)
}