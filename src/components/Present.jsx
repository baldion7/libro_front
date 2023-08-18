const posts = [
  {
    id: 3,
    title: 'Erika Duarte Porras',
    href: '#',
    description:
      'Docente de aula del grado 1-1 J.T\n' +
      'Licenciada en Educación Básica con énfasis en Lengua Castellana; con Especialización en Administración de la Informática Educativa, Para profundizar en este campo, decidí cursar una Maestría en Gestión de la Tecnología Educativa, donde adquirí herramientas y perspectivas para aprovechar al máximo las posibilidades que la tecnología ofrece en el ámbito educativo.',
    date: 'Jul 23, 2023',
    datetime: '2023-07-23',
    category: { title: 'Docentes', href: '#' },
    author: {
      name: 'Erika Duarte Porras',
      role: '',
      href: '#',
      imageUrl:
        '/src/img/WhatsApp Image 2023-08-07 at 11.38.32 AM.jpeg',
    },
  },
  {
    id: 2,
    title: 'Mary Claret Forero Jiménez',
    href: '#',
    description:
      'Docente de aula y directora de grupo grado 4-1 J.M. Mi experiencia abarca la rotación de las áreas de lenguaje y religión en los grados tercero y cuarto de primaria. Poseo una licenciatura en Educación Especial y especializaciones en informática y multimedia en educación, y en pedagogía para la docencia universitaria.\n' +
      '\n' +
      'Mi trayectoria como directora de grupo ha estado enfocada en proporcionar experiencias significativas que han transformado el desarrollo y aprendizaje de los niños desde el año 2020 hasta 2023. Mi enfoque innovador en los procesos educativos ha creado ambientes estimulantes para los estudiantes, fomentando su crecimiento personal y académico.',
    date: 'Jul 23, 2023',
    datetime: '2023-07-23',
    category: { title: 'Docentes', href: '#' },
    author: {
      name: 'Mary Claret Forero Jiménez',
      role: '',
      href: '#',
      imageUrl:
        '/src/img/WhatsApp Image 2023-08-06 at 11.01.46 PM.jpeg',
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
        '/src/img/WhatsApp Image 2023-08-07 at 10.46.49 AM.jpeg',
    },
  },



]
export const Present = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
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
                <p className="mt-5 line-clamp-7 text-sm leading-6 text-gray-600">{post.description}</p>
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