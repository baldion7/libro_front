import YouTube from 'react-youtube'
import React from 'react'
import {CarouselPost} from './CarouselPost.jsx'
import {InstagramEmbed, TikTokEmbed} from "react-social-media-embed";

export const Resultados = ({rute}) => {
    rute = ""
    const actividad2 = [
        {id: 0, url: 'img/WhatsApp Image 2023-11-06 at 12.49.47 AM (1).jpeg'},
        {id: 1, url: 'img/WhatsApp Image 2023-11-06 at 12.49.47 AM.jpeg'},
        {id: 2, url: 'img/WhatsApp Image 2023-11-06 at 12.49.48 AM.jpeg'},
        {id: 3, url: 'img/WhatsApp Image 2023-11-06 at 12.49.49 AM.jpeg'},
        {id: 4, url: 'img/WhatsApp Image 2023-11-06 at 12.49.50 AM.jpeg'},
        {id: 5, url: 'img/WhatsApp Image 2023-11-06 at 12.49.51 AM.jpeg'},
        {id: 6, url: 'img/WhatsApp Image 2023-11-06 at 12.49.52 AM.jpeg'},
        {id: 7, url: 'img/WhatsApp Image 2023-11-06 at 12.49.53 AM (1).jpeg'},
        {id: 8, url: 'img/WhatsApp Image 2023-11-06 at 12.49.53 AM.jpeg'},
        {id: 9, url: 'img/WhatsApp Image 2023-11-06 at 12.49.54 AM.jpeg'},
        {id: 10, url: 'img/WhatsApp Image 2023-11-06 at 12.49.55 AM.jpeg'},
        {id: 11, url: 'img/WhatsApp Image 2023-11-06 at 12.49.56 AM.jpeg'},
        {id: 12, url: 'img/WhatsApp Image 2023-11-06 at 12.49.57 AM.jpeg'}
    ]
    const actividad5 = [{url: 'img/WhatsApp Image 2023-11-06 at 1.26.05 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.05 AM (1).jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.06 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.06 AM (1).jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.04 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.04 AM (1).jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.04 AM (2).jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 1.26.04 AM (3).jpeg'}]
    const tomo1 = [{url: 'img/WhatsApp Image 2023-11-06 at 9.44.50 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 9.45.13 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 9.45.33 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 9.45.57 AM.jpeg'}]
    const tomo2 = [{url: 'img/WhatsApp Image 2023-11-06 at 9.46.28 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 9.46.58 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 9.47.13 AM.jpeg'},
        {url: 'img/WhatsApp Image 2023-11-06 at 9.47.27 AM.jpeg'}]
    const tomo3 = [
        {url: "img/WhatsApp Image 2023-11-06 at 9.47.56 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.48.12 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.48.31 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.48.52 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.49.08 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.49.22 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.49.33 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.49.49 AM.jpeg"},
        {url: "img/WhatsApp Image 2023-11-06 at 9.50.04 AM.jpeg"}
    ]

    const tomo4 = [
        {url: "img/articles-420355_recurso_11.png"},
        {url: "img/articles-420355_recurso_112.jpg"},
        {url: "img/articles-420355_recurso_113.jpg"},
    ]
    return (
        <>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">RESULTADOS</h2>
                        <p className="mt-4 text-gray-500">
                            Dentro de los resultados encontramos que se mejoro
                            - progresivamente las habilidades comunicativas y literarias: Los estudiantes han
                            experimentado y
                            participado en la creación de un libro desde su concepción hasta su producción final, lo que
                            les ha
                            permitido adquirir un conjunto de habilidades literarias.
                            <br/>
                            -tambien se logro fomentar la creatividad de los estudiantes quienes exploraron su
                            imaginación.
                            <br/>
                            -el Fortalecimiento de espacios de encuentro para la memoria colectiva y la participación de
                            la
                            comunidad:
                            promoviendo la participación activa de los padres y familiares en la lectura compartida y la
                            creación de
                            historias. contribuyendo a la construcción de la memoria colectiva y a la participación de
                            la comunidad
                            en
                            la educación.
                            <br/>
                            -La creación del primer libro literario hecho en la Escuela: Además, la edición de un libro
                            titulado "En
                            Algún Lugar de la Escuela: Relatos de Niños y Niñas del Barrio El Consuelo, Girón", se
                            amplía aún más la
                            contribución de este proyecto a la educación y la comunidad, proporcionando un registro
                            duradero de las
                            voces y experiencias de los estudiantes y enriqueciendo la educación de calidad en la
                            diversidad en la
                            gestión territorial.
                            <br/>
                            -finalmente el Uso efectivo de la página web <a href="http://olevengalecuento.online/"
                                                                            className="enlace-personalizado">https://olevengalecuento.online/</a> :
                            herramienta eficaz para
                            motivar a los estudiantes y conectarlos con el aprendizaje de su contexto de manera
                            atractiva.
                        </p>

                        <div>
                            <YouTube videoId={'OyMV6Vq-2XU'}
                                     className="flex justify-center items-center w-full rounded"/>
                            <YouTube videoId={'JYpf9FTmpg8'}
                                     className="flex justify-center items-center w-full rounded"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-6 lg:gap-8">
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-09-22 at 10.51.29 AM (1).jpeg'}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-09-27 at 2.46.54 PM.jpeg'}
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-09-27 at 2.46.54 PM (1).jpeg'}
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-09-27 at 2.46.54 PM (2).jpeg'}
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />

                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-09-27 at 2.46.55 PM.jpeg'}
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />

                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EL primer libro
                            literario:
                            ¡En algún lugar de la escuela! tiene su regisrto ISBN</h2>
                        <p className="mt-4 text-gray-500">
                            En los recovecos de nuestra sede educativa El Consuelo, entre risas de estudiantes y
                            murmullos de
                            conocimiento de los abuelos, yace un tesoro literario esperando ser descubierto. Este
                            registro, marcado
                            con el ISBN que lo conecta a cada rincón de la escuela, es más que un simple compendio de
                            páginas
                            encuadernadas. Es un viaje a través de las historias que han sido testigos silenciosos de la
                            vida
                            estudiantil, llevándonos a lugares donde las palabras cobran vida y la imaginación se
                            encuentra con la
                            realidad. Bienvenidos a un mundo donde cada libro es una puerta a la aventura, y cada
                            pasillo o lugar de
                            la escuela esconde secretos literarios que solo aquellos con ojos curiosos podrán descubrir
                            en <strong>Relatos
                            de
                            Niños y Niñas del Barrio El Consuelo, Girón"</strong> con <strong>ISBN
                            978-628-95822-1-5</strong> a
                            cargo
                            de Ediciones Literatonica
                            en dos tomos por el grado 4, junto con un tercer tomo titulado <strong>"Severo Mostra y
                            Mostra" con
                            *ISBN:
                            978-628-9582-1-5.</strong> escritos del grado primero
                        </p>
                        <CarouselPost rute={rute} slider={tomo3}/>

                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-6 lg:gap-8">
                        <CarouselPost rute={rute} slider={tomo1}/>
                        <CarouselPost rute={rute} slider={tomo2}/>
                        <YouTube videoId={'Fp8C6_Rn91o'} className="flex justify-center items-center w-full rounded"/>
                        <YouTube videoId={'7NLfD0DRzMg'} className="flex justify-center items-center w-full rounded"/>

                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Primer lanzamiento
                            mundial de
                            un libro mágico: "En algún lugar de la escuela</h2>
                        <p className="mt-4 text-gray-500">
                            ¡Atención a todos los abuelos, papás, mamás y familias aventureras! Estamos a punto de
                            embarcarnos en el
                            primer lanzamiento mundial de un libro mágico: "En algún lugar de la escuela".<br/> Es un
                            evento único
                            donde
                            los pequeños de la casa serán los protagonistas de una representación que hará vibrar cada
                            rincón de la
                            escuela. Acompañados de invitados especiales que le dan ese toque de genialidad al asunto,
                            la
                            historiadora
                            Patricia Sanmiguel nos llevará en un viaje a través del pasado para descubrir cómo las
                            historias se
                            entrelazan con nuestra realidad.<br/> Y para agregarle más emoción, el profesor Juan
                            Sebastián Peña,
                            experto en
                            hacer que el aprendizaje sea pura diversión, será nuestra guía en esta travesía
                            literaria.<br/> Así que
                            prepárense para sumergirse en un mundo donde los niños son héroes, las palabras son magia y
                            la escuela
                            es
                            el escenario perfecto para las aventuras más increíbles. ¡Bienvenidos a la gran premiere de
                            "En algún
                            lugar de la escuela"!
                            <br/>
                        </p>
                        <CarouselPost rute={rute} slider={actividad2}/>

                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-6 lg:gap-8">

                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.49.43 AM.jpeg'}
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />

                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.49.45 AM.jpeg'}
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />

                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.49.46 AM.jpeg'}
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />

                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.49.39 AM.jpeg'}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.49.44 AM.jpeg'}
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Magia entre Libros:
                            ¡En algún
                            lugar de la escuela! en el Festival de la Tigra Piedecuesta-Santander</h2>
                        <p className="mt-4 text-gray-500">
                            Estamos encantados de anunciar el segundo lanzamiento de <strong>"En algún lugar de la
                            escuela"</strong> en el mágico
                            Festival de la Tigra, que se llevará a cabo en la Biblioteca La Bellecera en Piedecuesta,
                            Santander.<br/> Este
                            evento será una explosión de creatividad y diversión, ya que contaremos con la espectacular
                            presentación
                            musical de los talentosos escritores Alekos y Amalia Low.<br/> ¡Imagina un mundo donde las
                            palabras se
                            mezclan
                            con acordes musicales para crear una experiencia inolvidable! Este libro, lleno de encanto y
                            aventuras,
                            encuentra su hogar en un festival que celebra la magia de la lectura.<br/> Únanse a nosotros
                            mientras
                            exploramos las páginas de "En algún lugar de la escuela" en un entorno lleno de música,
                            risas y
                            descubrimientos.<br/> ¡Prepárense para vivir una experiencia única donde la literatura se
                            encuentra con
                            la
                            melodía en el corazón de Piedecuesta! 📚🎶✨
                        </p>
                        <div>
                            <img src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.54.50 AM.jpeg'}
                                 className="flex justify-center items-center w-full rounded-[1rem] mb-4 "/>
                            <img
                                src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 1.06.46 AM.jpeg'}
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="rounded-lg bg-gray-100"
                            />
                            <YouTube videoId={'RkO_u4tSbug'}
                                     className="flex justify-center items-center w-full rounded"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-6 lg:gap-8">
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.54.51 AM.jpeg'}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.54.52 AM.jpeg'}
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.54.53 AM.jpeg'}
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                        <div>
                            <img
                                src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.54.54 AM.jpeg'}
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="rounded-lg bg-gray-100 mb-4"
                            />

                            <img
                                src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 12.56.20 AM.jpeg'}
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="rounded-lg bg-gray-100"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¡OLE, Venga Le
                            Cuento!
                            Transformando la Educación desde la Cámara del Comercio</h2>
                        <p className="mt-4 text-gray-500">
                            En esta presentación en la Cámara del Comercio, les contamos cómo, a través de la estrategia
                            "Pacto por
                            la
                            Educación Santander 2030", estamos marcando la diferencia en el tejido educativo. Desde la
                            articulación
                            familia-escuela, como maestras estas prácticas no solo garantizan procesos óptimos de
                            aprendizaje, sino
                            que también fortalecen los lazos con las comunidades. Nuestra misión es clara: consolidar el
                            Objetivo de
                            Desarrollo Sostenible #4, "Garantizar una educación inclusiva, equitativa y de calidad y
                            promover
                            oportunidades de aprendizaje durante toda la vida para todos". Así que ¡OLE, venga le
                            cuento! estamos
                            liderando el cambio hacia un futuro educativo brillante y sostenible!
                        </p>

                        <div>
                            <img src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 1.45.13 AM.jpeg'}
                                 className="flex justify-center items-center w-full rounded-[1rem] mb-4 "/>
                            <YouTube videoId={'aCnPSwxUOdQ'}
                                     className="flex justify-center items-center w-full rounded"/>
                        </div>
                    </div>
                    <div className="">
                        <CarouselPost rute={rute} slider={actividad5}/>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¡OLE, Venga Le
                            Cuento!
                            Transformando la Educación desde la Cámara del Comercio</h2>
                        <p className="mt-4 text-gray-500">
                            En esta presentación en la Cámara del Comercio, les contamos cómo, a través de la estrategia
                            "Pacto por
                            la
                            Educación Santander 2030", estamos marcando la diferencia en el tejido educativo. Desde la
                            articulación
                            familia-escuela, como maestras estas prácticas no solo garantizan procesos óptimos de
                            aprendizaje, sino
                            que también fortalecen los lazos con las comunidades. Nuestra misión es clara: consolidar el
                            Objetivo de
                            Desarrollo Sostenible #4, "Garantizar una educación inclusiva, equitativa y de calidad y
                            promover
                            oportunidades de aprendizaje durante toda la vida para todos". Así que ¡OLE, venga le
                            cuento! estamos
                            liderando el cambio hacia un futuro educativo brillante y sostenible!
                        </p>

                        <div>
                            <img src={rute + '/' + 'img/WhatsApp Image 2023-11-06 at 1.45.13 AM.jpeg'}
                                 className="flex justify-center items-center w-full rounded-[1rem] mb-4 "/>
                            <CarouselPost rute={rute} slider={actividad5}/>

                        </div>
                    </div>
                    <div className="">
                        <YouTube videoId={'Fp8C6_Rn91o'} className="flex justify-center items-center w-full rounded"/>
                        <YouTube videoId={'RkO_u4tSbug'} className="flex justify-center items-center w-full rounded"/>
                    </div>
                </div>

            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Primer lugar del
                            Foro Educativo de Girón 2023 </h2>
                        <p className="mt-4 text-gray-500">
                            Nuestro proyecto "¡OLE, Venga le cuento!" ha sido reconocido como el mejor en el Foro
                            Educativo Municipal de Girón 2023. Este triunfo es un homenaje a la educación y a la
                            creatividad de nuestra comunidad, es el resultado del esfuerzo conjunto de nuestros
                            estudiantes, padres de familia y agentes externos. ¡Gracias a todos por hacer de este sueño
                            una realidad!
                        </p>

                        <div>
                            <img src={rute + '/' + 'img/Primer lugar del Foro Educativo de Girón 20231.png'}
                                 className="flex justify-center items-center w-full rounded-[1rem] mb-4 "/>

                        </div>
                    </div>
                    <div className="">
                        <YouTube videoId={'YUCi0P-djng'} className="flex justify-center items-center w-full rounded"/>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos encontramos en
                            Centro de interés: ¡LEO venga le cuento! Feria del Libro de Bogotá del 18 al 23 de
                            abril.</h2>
                        <p className="mt-4 text-gray-500">
                            ¿Quieres despertar tu creatividad y aprender cosas nuevas? ¡Visítanos en la carpa del MEN,
                            el Centro de Interés: LEO de la Feria del Libro! Tendremos talleres inspirados en nuestro
                            libro "En algún lugar de la escuela", donde podrás desarrollar tus habilidades de lectura,
                            escritura y reflexionar sobre la formación en valores para niños, jóvenes y adultos. ¡No te
                            lo pierdas!
                        </p>

                        <div>
                            <img src={rute + '/' + 'img/articles-420355_recurso_1.jpg'}
                                className="flex justify-center items-center w-full rounded-[1rem] mb-4 "/>
                            <img
                                src={rute + '/' + 'img/articles-420355_recurso_11.png'}
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="rounded-lg bg-gray-100"
                            />
                            <CarouselPost rute={rute} slider={tomo4}/>

                        </div>
                    </div>
                    <div className="">

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <InstagramEmbed url="https://www.instagram.com/reel/C6OzAeBgdRi/?igsh=MTVsZXVmNWw3ZmQ5"
                                            width={'100%'}/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <TikTokEmbed
                                url="https://www.tiktok.com/@mineducacioncolombia/video/7359578333476113670?_r=1&_t=8oxkjsoboFZ"
                                width={'100%'}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}