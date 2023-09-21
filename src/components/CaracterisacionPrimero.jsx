import { CarouselJustification } from './CarouselJustification.jsx'

export const CaracterisacionPrimero = ({ rute }) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800" style={{backgroundImage: `url(https://img.freepik.com/foto-gratis/textura-papel-gris_1253-25.jpg?w=2000)`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>

      <div className="flex max-w-screen-xl px-4 py-8 mx-auto  justify-center items-centers" style={{width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="mr-auto w-full flex items-center flex-col " >
            <h1
              className="p-10 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              CARACTERIZACIÓN GRADO PRIMERO JORNADA TARDE
            </h1>
            <div className="">
              <p>
                <p className=" parrafo  ">
                <strong>EJE DE DESARROLLO: estimulación y Exploración</strong>
                  <br/>
                  <br/>
                </p>
                <img
                  src={'src/img/WhatsApp Image 2023-09-17 at 8.55.48 PM.jpeg'}
                  className="imagen" alt=""/>
                Las características de los niños y niñas se encuentran determinadas por la etapa que atraviesan
                finalizando la etapa preoperacional a la que ingresaron a los dos años y avanzando hasta la etapa
                operatoria que inicia alrededor de los siete años.
                <br/>
                Los escolares de primer ciclo (preescolar, primero, visto desde el trabajo institucional) ya han interiorizado sus acciones y poseen un nivel avanzado del pensamiento, aunque aún es muy concreto. En esta etapa se observa que inician el desarrollo de operaciones más complejas mientras que su pensamiento tiene un mayor nivel de abstracción.

                <br/>
                Gracias al desarrollo del lenguaje sus capacidades cognitivas se afinan cada vez más. En cuanto a la inteligencia lingüística se observa que los niños utilizan un buen repertorio del lenguaje propio de su edad y grado de escolaridad, aunque algunos niños niñas que se encuentran en este nivel presentan dificultades en la dicción.
                <br/>
                En el aspecto familiar y social, la familia juega un papel importante en sus vidas, aunque van generando progresivamente autonomía. Comparten el tiempo libre y jornada contraria a la escolar principalmente con su núcleo familiar o cuidadores.
                <br/>
                El nivel educativo de los padres juega un papel fundamental en el apoyo a los procesos escolares de sus hijos. En este aspecto se encontró que en un promedio del 60% padres y madres tienen cursada la educación media
              </p>
              <img src={"src/img/WhatsApp Image 2023-09-17 at 7.01.51 PM.jpeg"}/>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-5 lg:flex">
        </div>
      </section>
    </>
  )
}