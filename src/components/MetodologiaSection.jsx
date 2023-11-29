import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TextColumn = styled.div`
  flex: 1;
  padding-right: 8%;
  padding-left: 8%;
  padding-top: 6%;
  background-color: #f0f0f0; /* Color de fondo del texto */
  
`;


const MetodologiaSection = () => {
  return (
    <Container>
      <TextColumn>
        <div style={{display: 'flex', justifyContent: 'center'}}>

        <h1 style={{fontSize:'20px', fontFamily: 'Indie Flower, cursive', fontWeight: 'bold'}}>Metodología</h1>
        </div>
        <p>
          <br/>
           El producto principal del proyecto: “OLE, venga le cuento” es la construcciòn de un libro
          recopilatorio de las historias que los niños y niñas crearon a partir de sus realidades, intereses ficcionales
          y la recoplación de la memoria histórica de su familia.
          En ese sentido, de acuerdo a los objetivos específicos plantedados anteriormente, la metodología desarrollada
          fue la siguiente:
          <br/>
          1. Implementar jornadas de promociòn de lectura en diferentes tipologìas textuales y formatos libreros
          <br/>
          Antes y complementariamente a los ejercicios de escritura realizados con los estudiantes desde el grado
          primero hasta hoy en día (cuarto grado) se han realizado jornadas de lectura de diferentes tipo de textos como
          soporte y ayuda del docente en desarrollar habilidades y destrezas de las diferentes areas. De esta forma llas
          clases de tipología textual desde su género literario y desde su formato, se establecen asì:
          <br/>
          • Poemínismos<br/>
          • Libros en pequeños formatos<br/>
          • Libro álbumes<br/>
          Las temáticas trabajadas en estas lecturas se enfocaron en aquellas que pudieran ser utilizadas en los
          ejercicios de escritura posteriores:<br/>
          • ¡Así vivo yo!<br/>
          • Aventuras de mi mascota<br/>
          • ¿ Para què sirve un niño?<br/>
          • Carta a mis abuelos<br/>
          • Mi juguete favorito<br/>
          • La tarea mentirosa<br/>
          • Mis vecinos<br/>
          • mi mostruo favorito<br/>
          • Mis abuelos<br/>
          Adicionalmente, se realizó con los estudiantes un ejercicio de cartografía social en el que cada uno mapeó
          parte de su barrio, principalmente su cuadra y los lugares más cercanos a su hogar, con el objetivo de
          rastrear la diversidad de la población, sus costumbres , tradiciones, necesidades y problemas.
          <br/>
          De esta manera a la lectura de los libros le acompañó la lectura del mundo, del contexto en el que cada uno
          vive. Este resultado el aprendizaje significativo que fue trabajado en este objetivo específico. La lectura
          del mundo precede a la lectura de los libros y la cultura escrita, dichas actividades fueron llevadas al aula
          de grado primero por motivacoion de la docente al llegar a crear severos mostros y mostras con los testimonios
          dados de sus abuelos y lecturas de libros.
          <br/>
          - Realizar 8 sesiones de escritura creativa a partir de estrategias literarias de creación.
          Para este objetivo se realizaron dos sesiones de escritura por temática seleccionada. Como se mencionó en el
          objetivo anterior, las lecturas se fueron intercalando con su respectiva sesión de escritura<br/>
          • ¡Así vivo yo!<br/>
          • Aventuras de mi mascota<br/>
          • ¿ Para què sirve un niño?<br/>
          • Carta a mis abuelos<br/>
          • Mi juguete favorito<br/>
          • La tarea mentirosa<br/>
          • Mis vecinos<br/>
          • mi mostruo favorito<br/>
          • Mis abuelos<br/>
          Cada estudiante se vio enfrentado a textos en formatos libreros poco conocidos para ellos. Pero lo importante
          aquí es que de esta experiencia lectora pudieron encontrar muchas razones por las cuales ellos también podían
          contar sus propias historias.
          <br/>
          De esta manera, el aprendizaje significativo resultante de estas sesiones de las cuales salió la materia prima
          ficcional para alimentar el libro recopilatorio, es la desmitificación de la labor del escritor, en el sentido
          de encontrar la certeza de que la vida misma y las cosas que han pasado por ella hasta ese momento, vienen a
          ser recursos que podrían contarse.
          <br/>
          Ejemplo de ello es fundamentalmente las entrevistas que los estudiantes hicieron a sus abuelas y abuelos
          (videos que se encuentran en la emisora comunutaria San juan de Girón 88.2 F.M). Quienes desde su experiencia
          de vida aportaron historias con las cuales los niños, además de generar prácticas periodísticas conocieron
          relatos bellos, tenebrosos y de amor de sus antepasados. En ese sentido la escritura partió de la vida misma.
        </p>
      </TextColumn>

    </Container>
  )
}

export default MetodologiaSection
