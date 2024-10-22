const posts = [
  {
    id: 3,
    title: 'Erika Duarte Porras',
    href: '#',
    description:
      'Docente de aula de aula del grado 1-1 J.T. licenciada en Educación Básica con énfasis en lengua castellana, con especialización y Maestría en Gestión de la Tecnología Educativa.\n' +
      'Estos estudios me han aportado a mi vida profesional y me han dado herramientas para fortalecer y aportar a mis niños, niñas nuevas estrategias que ayuden a ampliar y afianzar sus conocimientos. Todo con el propósito de que en un futuro sean para personitas que aporten ideas y pensamientos de éxitos.',
    date: 'Jul 23, 2023',
    datetime: '2023-07-23',
    category: { title: 'Docentes', href: '#' },
    author: {
      name: 'Erika Duarte Porras',
      role: '',
      href: '#',
      imageUrl:
        '/img/WhatsApp Image 2023-08-07 at 11.38.32 AM.jpeg',
    },
  },
  {
    id: 2,
    title: 'Mary Claret Forero Jiménez',
    href: '#',
    description:
      'Licenciada en Educación Especial, con especializaciones en el área de la pedagógica. Docente de aula desde hace 35 años, actualmente directora de grupo grado -1 J.M, con quienes se viene trabajando desde el año 2020 proyectos de aula cuya finalidad es mejorar procesos personales y sociales de los estudiantes que conlleven a la motivación permanente de mejorar habilidades en la lectura y escritura. Participante en el proceso de validación nacional de los Créditos de Estándares Básicos de Competencias en Lenguaje.',
    date: 'Jul 23, 2023',
    datetime: '2023-07-23',
    category: { title: 'Docentes', href: '#' },
    author: {
      name: 'Mary Claret Forero Jiménez',
      role: '',
      href: '#',
      imageUrl:
        '/img/WhatsApp Image 2023-08-06 at 11.01.46 PM.jpeg',
    },
  },
  {
    id: 1,
    title: 'Claudia Baldión Acevedo',
    href: '#',
    description:
      'Docente de aula y directora de grupo grado 4-2 J.M\n' +
      'con rotación de las áreas de Ciencias Sociales y Tecnología.\n' +
      ' Licenciada en Ciencias Sociales; Especialista en la Aplicación de TIC para la enseñanza, lo que me ha permitido descubrir nuevas formas de hacer que el aprendizaje sea más interactivo y emocionante para mis estudiantes; Magister en Tecnologías Digitales Aplicadas a la Educación, para seguir innovando en el aula.',
    date: 'Jul 23, 2023',
    datetime: '2023-03-16',
    category: { title: 'Docentes', href: '#' },
    author: {
      name: 'Claudia Baldión Acevedo',
      role: '',
      href: '#',
      imageUrl:
        '/img/WhatsApp Image 2023-08-07 at 10.46.49 AM.jpeg',
    },
  },

]
export const Present = () => {
  return (
    <div className="bg-white pb-10 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*
          <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        */}
        <div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <div
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ">
                  <p>{post.category.title}</p>
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <div>
                    <span className="absolute inset-0"/>
                    {post.title}
                  </div>
                </h3>
                <p
                  className="mt-5 line-clamp-7 text-sm leading-6 text-gray-600">{post.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-16 w-16 rounded-full bg-gray-50"/>
                <div className="text-sm leading-">
                  <p className="font-semibold text-gray-900">
                    <label href={post.author.href}>
                      <span className="absolute inset-0"/>
                      {post.author.name}
                    </label>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}