const people = [
  {
    name: 'Patricia Sanmiguel ',
    role: 'Historiadora de Girón ',
    imageUrl:'img/WhatsApp Image 2023-09-20 at 3.42.57 PM.jpeg',
  },
  {
    name: 'Juan Sebastian peña Mariño',
    role: 'Docente- coordinación editorial ',
    imageUrl: 'img/WhatsApp Image 2023-09-20 at 3.00.18 PM.jpeg',
  },
  {
    name: 'Kevin José Quiñones Baldion',
    role: 'Desarrollar de software',
    imageUrl: 'img/WhatsApp Image 2023-09-20 at 10.14.29 PM.jpeg',
  },
  {
    name: 'Nima Nemati Rodríguez',
    role: 'Aliado Estratégico y Colaboradora Especial',
    imageUrl: 'img/WhatsApp Image 2023-09-20 at 9.58.21 PM.jpeg',
  },
  {
    name: 'Emile Duarte porras',
    role: 'Colaboradora ensamblaje del fanzine artesanal',
    imageUrl: 'img/WhatsApp Image 2023-09-20 at 3.29.45 PM.jpeg',
  },
  {
    name: 'Compañeros docentes sede B El Consuelo',
    role: ' Gracias por los espacios brindados.',
    imageUrl: 'img/WhatsApp Image 2023-09-20 at 10.00.40 PM.jpeg',
  },

];


export const Team = ({rute}) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AGRADECIMIENTOS</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">

          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" style={{objectFit: 'cover'}} src={rute +'/'+person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}