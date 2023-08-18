import { CarouselJustification } from './CarouselJustification.jsx'

export const Justificacion = ({rute}) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800" >
        <div className="flex max-w-screen-xl px-4 py-8 mx-auto  justify-center items-centers">
          <div className="mr-auto w-full flex items-center flex-col ">
            <h1 className="p-10 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              JUSTIFICACION
            </h1>
            <p className=" pr-14 pl-14 mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">
              El proyecto 0LE (Oralidad, Lectura y Escritura, venga y le cuento) se centra en el interés de las docentes del Colegio Luis Carlos Galán Sarmiento, Sede B El Consuelo, por apoyar los procesos de aprendizaje de los estudiantes de grado cuarto uno que vienen siendo focalizados desde el preescolar. El proyecto busca desarrollar habilidades comunicativas fundamentales para que los estudiantes de primero: (1-1 JT) y cuarto: (4-1 JM) puedan construir su proyecto de vida. Para ello, se aplican herramientas proporcionadas por el Ministerio de Educación Nacional y la Secretaría de Educación Municipal.
              Desde una perspectiva basada en el desarrollo de Vygotsky, se reconoce que las instituciones educativas tienen la responsabilidad de garantizar el desarrollo cultural de los estudiantes y potenciar sus habilidades de expresión. La lengua oral y escrita juegan un papel fundamental en este proceso, permitiendo a los niños construir su identidad personal y desarrollar habilidades para interactuar en la sociedad.
              El proyecto se enfoca en la importancia de la lectura y escritura como prácticas socioculturales que permiten acceder al conocimiento y formar criterios propios frente a la información que circula en la sociedad actual. Además, se destaca el valor de la literatura como eje articulador del proceso, y se busca formar lectores y productores de texto.
              La metodología utilizada en el colegio se basa en el Aprendizaje Basado en Problemas (ABP), que promueve una educación centrada en la experiencia vivencial, la participación y la reflexión constante sobre lo aprendido. También se integran las memorias y experiencias de los abuelos, enriqueciendo el proceso educativo y creando un vínculo intergeneracional significativo.
              A lo largo de los años, el proyecto ha abordado diversas temáticas como: Afianzamiento de habilidades socioemocionales desde la innovación de estrategias lúdico- afectivas; La familia: un laboratorio de experiencias a un solo clic; Aprendiendo a un solo click ,se han adaptado a las circunstancias extraordinarias, como la pandemia, utilizando plataformas virtuales y herramientas en línea para asegurar la continuidad del proceso de enseñanza-aprendizaje.
              De esta manera, y retomando las palabras del Santo Papa Francisco en su mensaje en la Primera Jornada Mundial de los Abuelos y de los Mayores (25 de julio de 2021), "Yo estoy contigo todos los días" (cf. Mt 28,20), nació la idea de crear un libro "En algún lugar de la escuela: Relatos de niñas y niños del barrio el Consuelo, Girón", donde los estudiantes se apropian de las historias contadas por sus abuelos y las escriben, rescatando la memoria y experiencias vividas, y fomentando la formación de valores como la diversidad  y el sentido ciudadano en la comunidad educativa Galanista.
              Los abuelos juegan un papel fundamental en este proceso, transmitiendo sabiduría y amor incondicional, y su presencia en la vida de los estudiantes es valorada y apreciada, especialmente en tiempos difíciles como la pandemia, donde la conexión con los seres queridos cobra un valor especial. Los abuelos son un puente entre el pasado y el presente, y su visita es como la de un ángel que brinda consuelo y compañía.
            </p>
          </div>
        </div>
        <div className=" lg:col-span-5 lg:flex">
          <CarouselJustification rute={rute}/>
        </div>
      </section>
    </>
  );
};